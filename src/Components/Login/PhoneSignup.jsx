import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import garden from "../../Assets/Images/public-garden-2666476-2 1.png";

function PhoneSignup() {
 
  return (
    <Grid container mt={20} gap={8}>
      <Grid item xs={4} >
        <Box
          sx={{ border: "1px solid #CBCBCB" }}
          
          p="66px 53px "
          
        >
          <Grid>
            <Typography variant="h4">ثبت نام</Typography>
            <Typography variant="p">سازمان فضای سبز شهرداری مشهد</Typography>
          </Grid>
          <Grid display={"flex"} flexDirection={"column"} gap="19px">
            <Typography variant="p" pt="30px" >
              شماره موبایل
            </Typography>
            <TextField
              
              id="outlined-multiline-static"
              placeholder="شماره موبایل را وارد نمایید "
              sx={{
                // width: { sm:100, md: 200 },
                "& .MuiInputBase-root": {
                    height: 40
                } , 
               
            }}
            />
            <Button
              variant="contained"
              sx={{
                // width: { sm: 200, md: 300 },
                bgcolor: "#40513B",
                "&:hover": {
                  backgroundColor: "#40513B",
                },
              }}
            >
              ثبت نام در سامانه
            </Button>
            <Typography variant="p" textAlign={"center"}>
              آیا قبلا ثبت نام کرده اید ؟{" "}
              <Link
                href="#"
                variant="body2"
                sx={{ color: "#609966", textDecoration: "none" }}
              >
                {"ورود به سامانه"}
              </Link>
            </Typography>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        
        xs={7}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <img src={garden} alt="garden PhoneSignup" />
        <Typography variant="p" textAlign={"center"}>
          انجمن صنفی پیمانکاران فضای سبز
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PhoneSignup;
