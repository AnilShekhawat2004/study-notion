import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";

import { markLectureAsComplete } from "../../../services/operations/courseDetailsAPI";
import { updateCompletedLectures } from "../../../slices/viewCourseSlice";
import IconBtn from "../../common/IconBtn";

const VideoDetails = () => {
  const { courseId, sectionId, subSectionId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // HTML5 VIDEO REF
  const playerRef = useRef(null);

  const { token } = useSelector((state) => state.auth);

  const {
    courseSectionData,
    courseEntireData,
    completedLectures,
  } = useSelector((state) => state.viewCourse);

  const [videoData, setVideoData] = useState(null);
  const [previewSource, setPreviewSource] = useState("");
  const [videoEnded, setVideoEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  // FETCH VIDEO DATA
  useEffect(() => {
    if (!courseSectionData?.length) return;

    // Redirect if params missing
    if (!courseId || !sectionId || !subSectionId) {
      navigate("/dashboard/enrolled-courses");
      return;
    }

    // Find section
    const currentSection = courseSectionData.find(
      (course) => course._id === sectionId
    );

    if (!currentSection) return;

    // Find video
    const currentVideo = currentSection.SubSection.find(
      (data) => data._id === subSectionId
    );

    if (!currentVideo) return;

    setVideoData(currentVideo);
    setVideoEnded(false);

    if (courseEntireData?.thumbnail) {
      setPreviewSource(courseEntireData.thumbnail);
    }

  }, [
    courseSectionData,
    courseEntireData,
    location.pathname,
    courseId,
    sectionId,
    subSectionId,
    navigate,
  ]);

  // CHECK FIRST VIDEO
  const isFirstVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndex =
      courseSectionData[currentSectionIndex].SubSection.findIndex(
        (data) => data._id === subSectionId
      );

    return (
      currentSectionIndex === 0 &&
      currentSubSectionIndex === 0
    );
  };

  // CHECK LAST VIDEO
  const isLastVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndex].SubSection.length;

    const currentSubSectionIndex =
      courseSectionData[currentSectionIndex].SubSection.findIndex(
        (data) => data._id === subSectionId
      );

    return (
      currentSectionIndex ===
        courseSectionData.length - 1 &&
      currentSubSectionIndex === noOfSubsections - 1
    );
  };

  // NEXT VIDEO
  const goToNextVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const noOfSubsections =
      courseSectionData[currentSectionIndex].SubSection.length;

    const currentSubSectionIndex =
      courseSectionData[currentSectionIndex].SubSection.findIndex(
        (data) => data._id === subSectionId
      );

    // Next video in same section
    if (currentSubSectionIndex !== noOfSubsections - 1) {
      const nextSubSectionId =
        courseSectionData[currentSectionIndex].SubSection[
          currentSubSectionIndex + 1
        ]._id;

      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${nextSubSectionId}`
      );
    }

    // First video of next section
    else {
      const nextSectionId =
        courseSectionData[currentSectionIndex + 1]._id;

      const nextSubSectionId =
        courseSectionData[currentSectionIndex + 1]
          .SubSection[0]._id;

      navigate(
        `/view-course/${courseId}/section/${nextSectionId}/sub-section/${nextSubSectionId}`
      );
    }
  };

  // PREVIOUS VIDEO
  const goToPrevVideo = () => {
    const currentSectionIndex = courseSectionData.findIndex(
      (data) => data._id === sectionId
    );

    const currentSubSectionIndex =
      courseSectionData[currentSectionIndex].SubSection.findIndex(
        (data) => data._id === subSectionId
      );

    // Previous video in same section
    if (currentSubSectionIndex !== 0) {
      const prevSubSectionId =
        courseSectionData[currentSectionIndex].SubSection[
          currentSubSectionIndex - 1
        ]._id;

      navigate(
        `/view-course/${courseId}/section/${sectionId}/sub-section/${prevSubSectionId}`
      );
    }

    // Last video of previous section
    else {
      const prevSectionId =
        courseSectionData[currentSectionIndex - 1]._id;

      const prevSubSectionLength =
        courseSectionData[currentSectionIndex - 1]
          .SubSection.length;

      const prevSubSectionId =
        courseSectionData[currentSectionIndex - 1]
          .SubSection[prevSubSectionLength - 1]._id;

      navigate(
        `/view-course/${courseId}/section/${prevSectionId}/sub-section/${prevSubSectionId}`
      );
    }
  };

  // MARK COMPLETE
  const handleLectureCompletion = async () => {
    setLoading(true);

    const res = await markLectureAsComplete(
      {
        courseId: courseId,
        subsectionId: subSectionId,
      },
      token
    );

    if (res) {
      dispatch(updateCompletedLectures(subSectionId));
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col gap-5 text-white">

      {!videoData ? (
        <img
          src={previewSource}
          alt="Preview"
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="relative overflow-hidden rounded-lg">

          {/* HTML5 VIDEO */}
          <video
            ref={playerRef}
            src={videoData?.videoUrl}
            controls
            controlsList="nodownload"
            className="w-full rounded-lg"
            onEnded={() => setVideoEnded(true)}
          >
            Your browser does not support the video tag.
          </video>

          {/* VIDEO COMPLETED SCREEN */}
          {videoEnded && (
            <div
              className="absolute inset-0 z-[100] grid place-content-center"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
              }}
            >

              {/* MARK COMPLETE */}
              {!completedLectures.includes(subSectionId) && (
                <IconBtn
                  disabled={loading}
                  onclick={handleLectureCompletion}
                  text={
                    !loading
                      ? "Mark As Completed"
                      : "Loading..."
                  }
                  customClasses="mx-auto max-w-max px-4 text-xl"
                />
              )}

              {/* REWATCH */}
              <IconBtn
                disabled={loading}
                onclick={() => {
                  if (playerRef.current) {
                    playerRef.current.currentTime = 0;
                    playerRef.current.play();
                    setVideoEnded(false);
                  }
                }}
                text="Rewatch"
                customClasses="mx-auto mt-3 max-w-max px-4 text-xl"
              />

              {/* NAVIGATION */}
              <div className="mt-10 flex min-w-[250px] justify-center gap-4">

                {!isFirstVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToPrevVideo}
                    className="blackButton"
                  >
                    Prev
                  </button>
                )}

                {!isLastVideo() && (
                  <button
                    disabled={loading}
                    onClick={goToNextVideo}
                    className="blackButton"
                  >
                    Next
                  </button>
                )}

              </div>
            </div>
          )}
        </div>
      )}

      {/* TITLE */}
      <h1 className="mt-4 text-3xl font-semibold">
        {videoData?.title}
      </h1>

      {/* DESCRIPTION */}
      <p className="pb-6 pt-2">
        {videoData?.description}
      </p>
    </div>
  );
};

export default VideoDetails;