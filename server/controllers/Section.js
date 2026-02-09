const Section = require("../models/Section");
const Course = require("../models/Course");

exports.createSection = async(req, res) => {
    try{
        //fetch data
        const {sectionName, courseId} = req.body;

        //validation
        if(!sectionName || !courseId){
            return res.status(404).json({
                success:false,
                message:'Section related details are not found',
            })
        }

        //create a section
        const newSection = await Section.create({sectionName});

        //update section in Course
        const updatedCourseDetails = await Course.findByIdAndUpdate(
                                               courseId,
                                               {
                                                $push:{
                                                    courseContent:newSection._id,
                                                }
                                               },{new:true},)
                                               .populate({
                                                path: "courseContent",
                                                populate: {
                                                  path: "SubSection",  // Correct capitalization
                                                },
                                            }).exec();

        //return response
        return res.status(200).json({
            success:true,
            message:'Section is created successfully',
            updatedCourseDetails,
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Something went while creating section',
        })
    }
}

//update all sections 
exports.updateSection = async(req, res) => {
    try{
        //fetch data
        const{sectionName, sectionId} = req.body;

        //validation
        if(!sectionName || !sectionId){
            return res.status(404).json({
                success:false,
                message:'Section details are not found',
            })
        }

        //update data
        const section = await Section.findOneAndUpdate({_id:sectionId}, {sectionName}, {new:true});

        //return response
        return res.status(200).json({
            success:true,
            message:'Section updated successfully',
            data:section,
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Error occured during updating the details of section',
        })
    }
}

//Delete all section
exports.deleteSection=async(req,res)=>{
    try{
      //getId - this time sending id in parameters
      const {
        sectionId,courseId
      }=req.body;
  
      await Course.findByIdAndUpdate(courseId,{
        $pull:{
          courseContent:sectionId,
        }
      })
      console.log(sectionId);
      //find by id an delete
      const deletedSection=await Section.findByIdAndDelete(sectionId);
      console.log(sectionId,courseId);
  
      if(!deletedSection){
        return res.status(404).json({
          success:false,
          message:"Section not found",
        })
      }
  
      await SubSectionModal.deleteMany({_id:{$in:deletedSection.SubSection}});
      await Section.findByIdAndDelete(sectionId);
      const course=await Course.findById(courseId).populate({
        path:"courseContent",
        populate:{
          path:"SubSection"
        }
      }).exec();
  
  
      //H/W:-> Update Course
      //Delete id from schema , HW:Do we need to
      //return response 
      return res.status(200).json({
        success:true,
        message:"Section Deleted Successfully",
        data:course
      })
    }
    catch(err){
      return res.status(500).json({
        success:false,
        message:"Unable to remove section , please try again",
        error:err.mesage,
      })
    }
  }