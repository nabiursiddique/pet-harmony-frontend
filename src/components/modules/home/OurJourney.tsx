"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaMapMarkedAlt, FaMobileAlt, FaBookReader } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const OurJourney = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="mb-5">
        <h1 className="lg:text-5xl md:text-5xl font-bold uppercase mt-5 mb-10 text-center">
          Our Journey
        </h1>
      </div>
      <div ref={ref}>
        <VerticalTimeline>
          <VerticalTimelineElement
            visible={inView}
            date="2015"
            iconStyle={{ background: "#0d9488", color: "#fff" }}
            icon={<FaBookReader />}
          >
            <h3 className="vertical-timeline-element-title text-teal-600 font-bold">
              Founded Our Service
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-teal-600 font-bold">
              Naogaon, Bangladesh
            </h4>
            <p className="text-black">
              We started with a vision to provide convenient and affordable
              motorbike rentals for everyone.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={inView}
            date="2017"
            iconStyle={{ background: "#0d9488", color: "#fff" }}
            icon={<FaMapMarkedAlt />}
          >
            <h3 className="vertical-timeline-element-title text-teal-600 font-bold">
              Expanded Nationwide
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-teal-600 font-bold">
              Across the USA
            </h4>
            <p className="text-black">
              Our service expanded to cover major cities across the USA, making
              pet care accessible nationwide.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={inView}
            date="2019"
            iconStyle={{ background: "#0d9488", color: "#fff" }}
            icon={<FaMobileAlt />}
          >
            <h3 className="vertical-timeline-element-title text-teal-600 font-bold">
              Launched Our Mobile App
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-teal-600 font-bold">
              iOS & Android
            </h4>
            <p className="text-black">
              We launched a user-friendly mobile app, allowing customers to book
              motorbikes anytime, anywhere.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurJourney;
