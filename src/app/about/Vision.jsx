"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "./vision.css";

const Vision = () => {
  const [agFlag, setAgFlag] = useState(false);
  const [agHeight, setAgHeight] = useState(window.innerHeight);

  useEffect(() => {
    function fnOnScroll() {
      fnUpdateProgress();
      fnUpdateFrame();
    }

    function fnOnResize() {
      setAgHeight(window.innerHeight);
      fnUpdateProgress();
      fnUpdateFrame();
    }

    function fnUpdateWindow() {
      setAgFlag(false);
    }

    function fnUpdateFrame() {
      if (!agFlag) {
        requestAnimationFrame(fnUpdateWindow);
        setAgFlag(true);
      }
    }

    window.addEventListener("scroll", fnOnScroll);
    window.addEventListener("resize", fnOnResize);

    return () => {
      window.removeEventListener("scroll", fnOnScroll);
      window.removeEventListener("resize", fnOnResize);
    };
  }, [agFlag]);

  useEffect(() => {
    fnUpdateProgress();
  }, [agFlag, agHeight]);

  function fnUpdateProgress() {
    const agTimelineItems = document.querySelectorAll(".js-timeline_item");

    agTimelineItems.forEach((item) => {
      const agTop = item.getBoundingClientRect().top;
      const agPosY = window.scrollY || window.pageYOffset;

      if (agTop + agPosY < agPosY + agHeight / 1.5) {
        item.classList.add("js-ag-active");
      } else {
        item.classList.remove("js-ag-active");
      }
    });
  }

  return (
    <div className="ag-timeline-block">
      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline">Vision</div>
      </div>
      <section className="ag-section">
        <div className="ag-format-container">
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line">
              <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
            </div>
            <div className="ag-timeline_list">
              {/*  */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">1</div>
                  </div>
                  {/* <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">Mission 1</div>
                  </div> */}
                </div>
                <div className="ag-timeline-card_item2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      {/* <div className="ag-timeline-card_title">Mission 1</div> */}
                      <div className="ag-timeline-card_desc">
                        Contribute to the economic development of Bangladesh.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow2"></div>
                </div>
              </div>
              {/*  */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  {/* <div className="ag-timeline-card_meta-box">
                    <div className="ag-timeline-card_meta">Mission 2</div>
                  </div> */}
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">2</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      {/* <div className="ag-timeline-card_title">Mission 2</div> */}
                      <div className="ag-timeline-card_desc">
                        Foster a profound understanding of the private sector.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow2"></div>
                </div>
              </div>
              {/*  */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">3</div>
                  </div>
                  <div className="ag-timeline-card_meta-box">
                    {/* <div className="ag-timeline-card_meta">Mission 3</div> */}
                  </div>
                </div>
                <div className="ag-timeline-card_item2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      {/* <div className="ag-timeline-card_title">Mission 3</div> */}
                      <div className="ag-timeline-card_desc">
                        Champion policies and market solutions for growth and
                        prosperity.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
