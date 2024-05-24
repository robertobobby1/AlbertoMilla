import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function ResponsiveGrid({ ReactImages }) {
  let data = [];
  for (let i = 0; i < ReactImages?.length; i++) {
    data.push(ReactImages[i]);
  }

  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: "20px 10px 20px 10px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((image, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
            <Link
              to={image.route}
              className="flex justify-center items-center hoverable-text-image"
            >
              <div className="absolute text-black text-lg hoverable-text">
                {image.name}
              </div>
              <img
                src={image.src}
                className="object-fill"
                style={{ maxWidth: "100%" }}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ResponsiveGrid;
