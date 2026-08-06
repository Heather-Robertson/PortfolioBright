import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

export default function MorphDivider({z, colors}) {
  const svgRef = useRef();
  useGSAP(() => {
    const paths = svgRef.current.querySelectorAll(
      ".shape-overlays__path"
    );
    const numPoints = 10;
    const numPaths = paths.length;
    const delayPointsMax = 0.3;
    const delayPerPath = 0.25;
    let allPoints = [];
    let pointsDelay = [];

    for(let i = 0; i < numPaths; i++){
      let points = [];
      allPoints.push(points);
      for(let j = 0; j < numPoints; j++){
        points.push(100);
      }
    }

    const render = () => {
      for(let i = 0; i < numPaths; i++){
        const path = paths[i];
        const points = allPoints[i];
        let d = `M 0 ${points[0]} C`;

        for(let j = 0; j < numPoints - 1; j++){
          let p = ((j+1)/(numPoints-1))*100;
          let cp = p - (100/(numPoints-1))/2;
          d += `
            ${cp} ${points[j]}
            ${cp} ${points[j+1]}
            ${p} ${points[j+1]}
          `;
        }
        d += " V 100 H 0";
        path.setAttribute("d", d);
      }
    };

    const tl = gsap.timeline({
      paused:true,
      onUpdate:render,
      defaults:{
        ease:"power2.inOut",
        duration:0.9
      }
    });

    for(let i=0;i<numPoints;i++){
      pointsDelay[i] = Math.random()*delayPointsMax;
    }

    for(let i=0;i<numPaths;i++){
      const points = allPoints[i];
      const pathDelay = delayPerPath*i;
      for(let j=0;j<numPoints;j++){
        tl.to(points,{[j]:0},pointsDelay[j] + pathDelay);
      }
    }
 
    ScrollTrigger.create({
      trigger:svgRef.current.closest("section"),
      start:"bottom bottom",
      end:"bottom 20%",
      scrub:true,
      onUpdate(self){
        tl.progress(self.progress);
      }
    });
  }, {scope:svgRef});

  return (
    <svg
      ref={svgRef}
      style={{zIndex: z}}
      className="shape-overlays"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >

      {/* "#FFEA00"
      "#1F3E87"
      "#00C49A"
      "#FB8467" 
      "#FFB5B4"*/}

      <path className ="shape-overlays__path"
        id="wave-yellow"
        d=""
        // d="M299 8.73968C203.851 -12.0279 75.1667 44.9218 3 66.8247V289H1633V35.6041C1624.83 41.0495 1601.9 62.6135 1559.5 60.2901C1506.5 57.3858 1490 48.3099 1396 18.9044C1302 -10.5012 1237 -3.59867 1162.5 25.802C1048 70.9884 1087.5 55.7412 935.5 96.7637C729.915 152.248 822.5 35.7744 667 79.3381C511.5 122.902 380.5 26.5281 299 8.73968Z"
        fill={colors[0]}
      />

      <path className ="shape-overlays__path"
        id="wave-blue"
        d=""
        // d="M133.663 62.0397C71.5876 44.253 71.087 44.253 0 33V161.5V290H1629.99L1635 111.94C1590.95 95.6053 1560.91 116.296 1430.25 116.296C1338 116.296 1244.52 46.9643 1147.9 79.2707C889.059 165.821 878.074 98.5094 734.899 62.0397C541.162 33 391.235 139.09 315.386 130.09C232.785 120.289 255.813 97.0393 133.663 62.0397Z"
        fill={colors[1]}
      />

      <path className ="shape-overlays__path"
        id="wave-green"
        d=""
        // d="M280.602 145.3C186.801 129.524 54.4501 134.838 0 145.3V290H1632V180.703C1554.83 193.478 1528.78 155.706 1439.09 132.932C1370.4 115.491 1289.27 144.45 1194.56 155.706C1064.73 171.139 975.592 51.0001 817.253 51C679.708 50.9999 664.425 145.3 547.173 158.075C434.086 170.397 397.853 165.019 280.602 145.3Z"
        fill={colors[2]}
      />

      <path className ="shape-overlays__path"
        id="wave-orange"
        d=""
        // d="M458 147.357C359.5 167.281 362.101 270.099 198.5 245.529C120 233.74 103 184.67 0 197.711V289H1632V217.381C1565.21 238.745 1503 260.382 1302 232.125C1091.38 199.776 1046.5 124.897 871 179.96C708.094 231.072 572.943 124.107 458 147.357Z"
        fill={colors[3]}
      />

    </svg>
  );
}