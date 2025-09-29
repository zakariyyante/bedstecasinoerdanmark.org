"use client";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import React from "react";

const labels: { [index: string]: string } = {
  0.5: "Horrible",
  1: "Awful",
  1.5: "Bad",
  2: "Poor",
  2.5: "Average",
  3: "Decent",
  3.5: "Good",
  4: "Great",
  4.5: "Excellent",
  5: "Amazing",
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Star = ({ num, viewCount, score }: any) => {
  const [value, setValue] = React.useState<number | null>(num);
  const [hover, setHover] = React.useState(-1);
  const [voted, setVoted] = React.useState<boolean>(false);

  const handleVote = (newValue: number | null) => {
    setValue(newValue);
    setVoted(true);
  };
  return (
    <Box
      className="bonusBtn flex flex-col items-center gap-2"
      sx={{ width: 200 }}
    >
      <div className="bonusBtn flex flex-col items-center gap-2">
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          getLabelText={getLabelText}
          onChange={(event, newValue) => handleVote(newValue)}
          onChangeActive={(event, newHover) => setHover(newHover)}
          className="bonusBtn"
          sx={{
            color: "#facc15", // Tailwind yellow-400
            "& .MuiRating-iconFilled": {
              color: "#facc15",
              filter: "drop-shadow(0 0 4px #facc15)",
            },
            "& .MuiRating-iconHover": {
              color: "#fde047", // yellow-300
              transform: "scale(1.2)",
              transition: "0.2s ease",
            },
            fontSize: {
              xs: "1.5rem",
              md: "1.8rem",
            },
          }}
          emptyIcon={<StarIcon style={{ opacity: 0.3 }} fontSize="inherit" />}
        />
        <span className="bonusBtn text-xl font-bold text-cyan-400 ">
          {score}
        </span>
      </div>

      {value !== null && (
        <Box className="bonusBtn flex flex-col items-center text-sm text-white">
          <span className="bonusBtn">Rating ({viewCount})</span>
        </Box>
      )}
    </Box>
  );
};

export default Star;
