import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Banner.css";

// import required modules
import { Box, Typography } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import fruits from "../../assets/banners/banner-fruits.jpg";
import juice from "../../assets/banners/banner-juice.jpg";
import vegetables from "../../assets/banners/banner-vegetables.jpg";
import CustomButton from "../Shared/CustomButton";

const Banner = () => {
  return (
    <Box>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              backgroundImage: `url(${vegetables})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: {
                md: "cover",
                sm: "center",
                xs: "center",
              },
              height: {
                md: "100vh",
                sm: "100vh",
                xs: "100vh",
              },
              width: "100%",
            }}
          >
            <Box sx={{ ml: "15%" }}>
              <Typography variant="body1" color="green">
                Fresh Vegetables
              </Typography>
              <Typography sx={{ my: 3.5 }} variant="h4">
                <Box component="span" fontWeight="bold">
                  Organic food
                </Box>{" "}
                <Box component="br" />& healthy tasty
              </Typography>
              <CustomButton
                color={"green"}
                bgcolor={"green"}
                outlineColor={"success"}
              >
                shop now
              </CustomButton>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              backgroundImage: `url(${fruits})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}
          >
            <Box sx={{ ml: "15%" }}>
              <Typography variant="body1" color="green">
                Fresh Fruits
              </Typography>
              <Typography sx={{ my: 3.5 }} variant="h4">
                <Box component="span" fontWeight="bold">
                  Organic food
                </Box>{" "}
                <Box component="br" />& healthy tasty
              </Typography>
              {/* <Button
                variant="outlined"
                sx={{
                  "&:hover": {
                    outline: "none",
                    bgcolor: "green",
                    color: "#ee6c4d",
                  },
                }}
                color="success"
              >
                Shop Now
              </Button> */}
              <CustomButton
                color="success"
                bgcolor={"success"}
                outlineColor={"success"}
              >
                shop now
              </CustomButton>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              backgroundImage: `url(${juice})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100vh",
              width: "100%",
            }}
          >
            <Box sx={{ ml: "15%" }}>
              <Typography variant="body1" color="green">
                Top selling!
              </Typography>
              <Typography sx={{ my: 3.5 }} variant="h4">
                <Box component="span" fontWeight="bold">
                  Organic food
                </Box>{" "}
                <Box component="br" />& healthy tasty
              </Typography>
              <CustomButton
                color={"green"}
                bgcolor={"green"}
                outlineColor={"success"}
              >
                shop now
              </CustomButton>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Banner;
