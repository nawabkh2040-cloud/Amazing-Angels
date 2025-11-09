import { Church } from "lucide-react";
import React from "react";
import { HiHomeModern } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";
const WhyChooseUs= () => {
  return (
    <section className="bg-white  px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center ">
          <h2 className="text-4xl md:text-5xl font-main font-bold text-blue-700 mb-4">
            Why Choose Our School
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover a nurturing environment where academic excellence meets
            holistic growth — preparing students for a bright and successful
            future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-">
            {/* Feature 1 - Qualified Teachers */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <GiTeacher  className="text-white text-2xl"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Qualified & Caring Teachers
                  </h3>
                  <p className="text-gray-600">
                    Our experienced educators inspire curiosity, creativity, and
                    confidence through innovative teaching methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Holistic Learning */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Church className="text-white"/>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Holistic Learning Environment
                  </h3>
                  <p className="text-gray-600">
                    We focus on academics, sports, arts, and values to ensure
                    the all-round development of every student.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Modern Infrastructure */}
            <div className="group p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <HiHomeModern className="text-white  text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    Modern Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Equipped with smart classrooms, digital labs, and safe
                    campuses to make learning engaging and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative flex justify-center">
            <img
              className="rounded-xl"
              src="/vision.png"
              alt="Students learning in classroom"
            />
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default WhyChooseUs;
