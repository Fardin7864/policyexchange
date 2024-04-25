"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import "./mission.css";

const Mission = () => {
  const [agFlag, setAgFlag] = useState(false);
  const [agHeight, setAgHeight] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerHeight;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    // setAgHeight(window.innerHeight);
    // fnUpdateProgress();

    function fnOnScroll() {
      fnUpdateProgress();
      fnUpdateFrame();
    }

    function fnOnResize() {
      setAgHeight(window?.innerHeight);
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

    window?.addEventListener("scroll", fnOnScroll);
    window?.addEventListener("resize", fnOnResize);

    return () => {
      window?.removeEventListener("scroll", fnOnScroll);
      window?.removeEventListener("resize", fnOnResize);
    };
  }, [agFlag]);

  useEffect(() => {
    fnUpdateProgress();
  }, [agFlag, agHeight]);

  function fnUpdateProgress() {
    const agTimelineItems = document.querySelectorAll(".js-timeline_item");

    agTimelineItems.forEach((item) => {
      const agTop = item.getBoundingClientRect().top;
      const agPosY = window?.scrollY || window?.pageYOffset;

      if (agTop + agPosY < agPosY + agHeight / 1.1) {
        item.classList.add("js-ag-active");
      } else {
        item.classList.remove("js-ag-active");
      }
    });
  }

  return (
    <div className="ag-timeline-block">
      <div className="ag-timeline_title-box">
        <div className="ag-timeline_tagline -ml-7">Mission & Vision</div>
      </div>
      <section className="ag-section">
        <div className="ag-format-container">
          <div className="js-timeline ag-timeline">
            <div className="js-timeline_line ag-timeline_line">
              <div className="js-timeline_line-progress ag-timeline_line-progress"></div>
            </div>
            <div className="ag-timeline_list">
              {/* mission-1 */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 1 */}</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc">
                        Contribute to the economic development of Bangladesh.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-1"></div>
                </div>
              </div>

              {/* vision-1 */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 2 */}</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item item-2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc text-start">
                        Be the trusted partner and advisor for businesses,
                        policymakers, investors, and stakeholders.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-2"></div>
                </div>
              </div>
              {/* mission-2 */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 3 */}</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc">
                        Foster a profound understanding of the private sector.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-1"></div>
                </div>
              </div>
              {/* vision-2 */}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 4 */}</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item item-2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc text-start">
                        Navigate the complexities of Bangladesh&apos;s economy.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-2"></div>
                </div>
              </div>
              {/*  mission -3*/}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 5 */}</div>
                  </div>
                  <div className="ag-timeline-card_meta-box"></div>
                </div>
                <div className="ag-timeline-card_item">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc">
                        Champion policies and market solutions for growth and
                        prosperity.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-1"></div>
                </div>
              </div>

              {/* vision-3*/}
              <div className="js-timeline_item ag-timeline_item">
                <div className="ag-timeline-card_box">
                  <div className="js-timeline-card_point-box ag-timeline-card_point-box">
                    <div className="ag-timeline-card_point">{/* 6 */}</div>
                  </div>
                </div>
                <div className="ag-timeline-card_item item-2">
                  <div className="ag-timeline-card_inner">
                    <div className="ag-timeline-card_info">
                      <div className="ag-timeline-card_desc text-start">
                        Seize its vast potential for sustainable development.
                      </div>
                    </div>
                  </div>
                  <div className="ag-timeline-card_arrow arrow-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
