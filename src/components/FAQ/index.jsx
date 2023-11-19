import React from "react";
import "./faq.css";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
//import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
export default function Index() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="faq-container">
      <div className="faq-heading">
        <p className="faq-label">FAQ</p>
        <p className="faq-content">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.{" "}
        </p>
      </div>
      <div className="faq-accordian">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ backgroundColor: "#1D1D1D" }}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
           // expandIcon={<img src  ="accordian.png" alt = "Click"/>}
          >
            <Typography
              sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              Do I need a personal injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                opacity: "30%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={{ backgroundColor: "#1D1D1D" }}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<img src  ="accordian.png" alt = "Click"/>}
          >
            <Typography
              sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                opacity: "30%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={{ backgroundColor: "#1D1D1D" }}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<img src  ="accordian.png" alt = "Click"/>}
          >
            <Typography
              sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              What should I do right after car accidect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                opacity: "30%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
          sx={{ backgroundColor: "#1D1D1D" }}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            expandIcon={<img src  ="accordian.png" alt = "Click"/>}
          >
            <Typography
              sx={{ color: "white", fontSize: "24px", fontWeight: "600" }}
            >
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                color: "white",
                fontSize: "18px",
                fontWeight: "500",
                opacity: "30%",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
