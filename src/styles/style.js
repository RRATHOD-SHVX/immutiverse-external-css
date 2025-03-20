// styledComponents.js
import {  styled } from "@mui/system";
import {
  Table,
  TableCell,
  Box,
  IconButton,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TableRow,
} from "@mui/material";

export const BulkUploadInputLabel = styled("span")({
  color: "#000",
  fontFamily: "Montserrat",
  fontSize: "1.125rem",//18px
  fontWeight: "600",
  "@media (max-width: 1280px)": {
    fontSize: "1rem",//16px

  },
  "@media (max-width: 480px)": {
    fontSize: "0.875rem",//14px
  },
  "@media (max-width: 425px)": {
    fontSize: "0.750rem",//12px
  },
  "@media (max-width: 320px)": {
  },
});
export const DownloadLabel = styled("span")({
  color: "#000",
  fontFamily: "Montserrat",
  fontSize: "1rem",//16px
  fontWeight: "700",
  // lineHeight:"40px",
  "@media (max-width: 1280px)": {
    fontSize: "0.875rem",//14px
  },
  "@media (max-width: 480px)": {
    fontSize: "0.750rem",//12px

  },
  "@media (max-width: 425px)": {
    fontSize: "0.625rem",//10px

  },
  "@media (max-width: 320px)": {
  },
});

export const DownloadLinkLabel = styled("span")({
  color: "#3F185B",
  fontFamily: "Montserrat",
  fontSize: "0.875rem",//14px
  fontWeight: "600",
  marginBottom: "0.625rem",//10px
  cursor: "pointer",
  position: "relative",  
  "&:hover": {
    textDecoration: "underline",
  },
  "&:not(:last-child)::after": {
    content: '""',  
    position: "absolute",
    top: "0",
    right: "-15px", 
    width: "2px",   
    height: "100%",
    backgroundColor: "#3F185B", 
  },
  "@media (max-width: 1280px)": {
    marginBottom: "0.313rem",//5px
  },
  "@media (max-width: 480px)": {
    fontSize: "0.750rem",//12px
    

  },
  "@media (max-width: 425px)": {
    fontSize: "0.625rem",//10px
  },
  "@media (max-width: 320px)": {
  },
});
export const DownloadLinks = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  marginTop: "0.938rem",//15px
  "@media (max-width: 1280px)": {
    marginTop: "0.6rem",//15px
  },
  "@media (max-width: 480px)": {

  },
  "@media (max-width: 425px)": {
  },
  "@media (max-width: 320px)": {
  },
});

export const UploadButton = styled(Button)({
  backgroundColor: "#F5F5FA",
  boxShadow:
    "-2px -2px 4px 0px rgba(255, 255, 255, 0.50) inset, 2px 2px 4px 0px rgba(170, 170, 204, 0.25) inset, 5px 5px 10px 0px rgba(170, 170, 204, 0.50) inset, -5px -5px 10px 0px #FFF inset",
  color: "rgba(0, 0, 0, 0.21)",
  fontSize: "0.938rem",//15px
  fontWeight: "500",
  fontFamily: "Montserrat",
  textTransform: "capitalize",
  // lineHeight:"40px",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // width: "100%",
  width: "20.833vw",//300px
  margin: "0.6rem auto 1.563rem",
  position: "relative",
  transition: "box-shadow 0.3s ease",
  ".upload-icon": {
    width: "18px",
    height: "18px",
  },
  "& .file-name": {
    whiteSpace: "nowrap",    
    overflow: "hidden",       
    textOverflow: "ellipsis", 
    flex: 1,     
    textAlign: "left",          
    marginLeft: "1.2rem",     //20px
  },

  "&:hover": {
    boxShadow:
      "-2px -2px 4px 0px rgba(255, 255, 255, 0.50) inset, 2px 2px 4px 0px rgba(170, 170, 204, 0.25) inset, 5px 5px 10px 0px rgba(170, 170, 204, 0.50) inset, -5px -5px 10px 0px #FFF inset",
  },

  "@media (max-width: 1280px)": {
    margin: "0.6rem auto 0.7rem",
    fontSize: "0.8rem",

  },
  "@media (max-width: 768px)": {
    width: "15rem",

  },
  "@media (max-width: 480px)": {
    width: "14.375rem",//230px

  },
  "@media (max-width: 425px)": {
    width: "12.500rem",//200px
  },
  "@media (max-width: 320px)": {
    width: "9.375rem",//150px
  },
  "@media (max-width: 270px)": {
    width: "8rem",//130px

  },
});


export const SubmitButton = styled("span")(({ theme }) => ({
  backgroundColor: "#D70D61",
  borderRadius: "50px",
  position: "absolute",
  bottom: "-8%",
  padding: "0px 30px", 
  left: "50%",
  color: "#FFF",
  cursor: "pointer",
  textAlign: "center",
  fontFamily: "Montserrat, sans-serif",
  textTransform: "capitalize",
  fontSize: "1rem", //16px
  fontWeight: "600",
  display: "flex",
  lineHeight:"250%",
  alignItems: "center",
  justifyContent: "center",
  // boxShadow: "0px 11px 16px -4px rgba(0, 0, 0, 0.37)",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
  "&:hover": {
    backgroundColor: "#D70D61", 
  },
  "@media (max-width: 1280px)": {
    fontSize: "1rem", 
    lineHeight:" 200%",
    padding: "0px 25px", 


  },
  "@media (max-width: 768px)": {
    fontSize: "0.9rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.8rem", 
  },
}));

export const BulkUploadTitle = styled("div")((props) => ({
  marginTop: props.showScoreContainer ? "2.813rem" : "1.3rem",
  color: "#fff",
  fontFamily:"Montserrat",
  fontWeight: "600",
  fontSize: props.showScoreContainer ? "1.250rem" : "1rem",//16px  ,showContainer=20px

  "@media (max-width: 1280px)": {
    fontSize: props.showScoreContainer ? "1.3rem" : "0.8rem", 
    marginTop: props.showScoreContainer ? "3rem" : "0.9rem",
  },
  "@media (max-width: 768px)": {
    fontSize: props.showScoreContainer ? "22px" : "0.9rem", 
    marginTop: props.showScoreContainer ? "50px" : "25px",
  },

  "@media (max-width: 480px)": {
    fontSize: props.showScoreContainer ? "1.1rem" : "0.8rem",
    marginTop: props.showScoreContainer ? "10px" : "40px",
  },
  "@media (max-width: 375px)": {
    fontSize: props.showScoreContainer ? "1rem !important" : "0.8rem",
    marginTop: props.showScoreContainer ? "1px !important" : "40px",
  },
  "@media (max-width: 360px)": {
    fontSize: props.showScoreContainer ? "20px" : "0.625rem",
    marginTop: props.showScoreContainer ? "25px" : "1.5rem",
  },
}));


// export const ErrorText = styled(Typography)`
//   color: red;
//   margin-top: 10px;
//   "@media (max-width: 1280px)": {
//     margin-top: -11px;
//   }
// `;
export const ErrorText = styled(Typography)({
  color: "red",
  marginTop: "0.5rem",//8px
  fontSize:"1rem",//16px
  fontFamily: "Montserrat",
  "@media (max-width: 1280px)": {
    fontSize:"0.8rem",//14px
    marginTop: "0.3rem",//8px
  }
})



export const SingleCveErrorText = styled(ErrorText)({
  color: "red",
  marginTop: "0.4rem",
  fontSize:"1rem",
  fontFamily: "Montserrat",
  "@media (max-width: 1280px)": {
    fontSize:"0.8rem",
    marginTop: "0.6rem",
  }
});

export const BulkCveErrorText = styled(ErrorText)({
  color: "red",
  marginTop: "0.2rem",
  fontSize:"1rem",//16px
  fontFamily: "Montserrat",
  "@media (max-width: 1280px)": {
    fontSize:"0.8rem",
    marginTop: "0.2rem",
  }});


export const CenteredTableContainer = styled("div")({
  display: "flex",
  justifyContent: "center",  
  alignItems: "center",  
  width: "100%", 
  overflowX: "auto", 
});



export const StyledTable = styled(Table)({
  width: "80%", 
  maxWidth: "1440px",
  marginLeft: "8%", 
  marginBottom:"30px",
  borderCollapse: "collapse",
  tableLayout: "fixed",
  "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
    width: "100%", 

  },
  "@media (max-width: 480px)": {
    width: "90%", 
    },
  "@media (max-width: 270px)": {
    width: "100%", 
    },
});


export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: "none", 
  // '& > *:nth-child(4)': {
  //   borderRadius: '0px !important', 
  // },

  '& > *:nth-child(1)': {
    borderTopLeftRadius: '1.875rem',//30px
  },
  '& > *:nth-child(3)': {
    borderTopRightRadius: '1.875rem', //30px
  },
  "@media (max-width: 425px)": {
    '& > *:nth-child(1)': {
      borderTopLeftRadius: '1.5rem',//30px
    },
    '& > *:nth-child(3)': {
      borderTopRightRadius: '1.5rem', //30px
    },  
    },
  "@media (max-width: 270px)": {
    '& > *:nth-child(1)': {
      borderTopLeftRadius: '1.5rem',//30px
    },
    '& > *:nth-child(3)': {
      borderTopRightRadius: '1.5rem', //30px
    },  
    },
}));

export const StyledTableHeadCell = styled(TableCell)(
  ({ first, middle, last }) => ({
    textAlign: "center",
    color: "#FFFFFF",
    backgroundColor: "#3F185B",
    fontSize: "1.250rem",//20px
    fontWeight: "600",
    lineHeight: "150%",
    padding: "0.9rem",//15px
    fontFamily: "Montserrat",
    borderLeft: "none !important",
    borderRight: "none !important",
    width: first ? "30%" : middle ? "30%" : last ? "30%" : "0.1% !important", 

    "@media (max-width: 1280px)": {
      fontSize: "1rem",//16px
      padding:"0.8rem"
    },
    "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
      fontSize: "1rem",//16px
    },
    "@media (max-width: 470px)": {
      fontSize: "12px",
    },
    "@media (max-width: 360px)": {
      fontSize: "8px",
    }
  })
);

export const StyledTableBodyCell = styled(TableCell)(
  ({ bold, noBottomBorder, isLast, isToggleColumn, isFirst,expandedIndex, index  }) => ({
    textAlign: isToggleColumn ? "left" : "center",
    padding: isToggleColumn ? "0px" : "8px !important",
    fontSize: "1.250rem", // 20px
    lineHeight: "150%",
    color: bold ? "#3F185B" : "#000",
    fontWeight: bold ? "600" : "500",
    borderLeft: isFirst ? "none" : isToggleColumn ? "none" : "2px solid  rgba(170, 170, 204, 0.50)",
    borderRight: isLast ? "none" : isToggleColumn ? "none" : "2px solid  rgba(170, 170, 204, 0.50)",
    
    borderBottomLeftRadius: isFirst && expandedIndex === index ? "15px" : "0px",
    borderBottomRightRadius: isLast && expandedIndex === index ? "15px" : "0px",
    
     borderBottom: isToggleColumn || noBottomBorder
  ? "none" 
  : "2px solid rgba(170, 170, 204, 0.50)",

    
    fontFamily: "Montserrat",
    background: isToggleColumn ? "transparent" : "#F3F3F3",
    width: isToggleColumn ? "10px" : "auto",
    "@media (max-width: 1280px)": {
      fontSize: "1rem",
    },
    "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
      fontSize: "0.8rem",
    },
    "@media (max-width: 470px)": {
      fontSize: "10px",
    },
    "@media (max-width: 360px)": {
      fontSize: "8px",
    },
  })
);


export const ToggleIconButton = styled(IconButton)({
  padding: "0 !important",
  "&:hover": {
    backgroundColor: "transparent !important",
  },
  
});

export const BulkCustomAccordion = styled(Accordion)(({ theme, expanded }) => ({
  border: "none !important",
  borderRadius: expanded ? "10px !important" : "10px !important",
  backgroundColor: expanded ? "#FFF" : "#F3F3F3",
  margin:"0.938rem 0  !important" ,//15px
  transition:
    "background-color 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease, border-radius 0.3s ease",
  "&::before": {
    backgroundColor: "transparent !important",
  },
  marginTop: "10px",
  fill:"#FFF",
    // boxShadow: expanded
    //     ? "0px 4px 12px rgba(101, 97, 97, 0.25)"  
    //     : "none",
    boxShadow: "none !important",
    border: expanded? "1px solid #3F185B": "none !important", 
}));

export const BulkCustomAccordionSummary = styled(AccordionSummary)(
  ({ theme, expanded }) => ({
    padding: "2px 24px",
    "&.Mui-expanded": {
      margin: "0 !important", 
      minHeight: "unset !important", 
  },
    "& .MuiTypography-root": {
      fontSize: "0.625rem !important",//10px
      color: expanded ? "#3F185B" : "#000",
      transition: "font-size 0.3s ease, color 0.3s ease",
      fontWeight: "600",
    },
   
  })
);

export const BulkCustomAccordionDetails = styled(AccordionDetails)(
  ({ theme }) => ({
    padding:"0px 20px 15px 20px",
    color: "#000",
    // color: "#000",
    fontSize: "1rem",//16px
    fontWeight: "500",
    wordBreak:"break-word",
    fontFamily: "Montserrat !important",
    transition: "background-color 0.3s ease, padding 0.3s ease",
    wordWrap: "break-word", 
    overflowWrap: "break-word",
    "@media (max-width: 1280px)": {
      fontSize: "0.9rem",
    },
    "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
      fontSize: "0.7rem",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.625rem",//10px
    },
    "@media (max-width: 425px)": {
    }
  })
  
);

export const BulkCustomTypography = styled("span")(({ theme, expanded }) => ({
  fontSize: "1rem",//16px
  fontFamily: " Montserrat",
  fontWeight: "600",
  color: expanded ? "#3F185B" : "#000",
  "@media (max-width: 1280px)": {
    fontSize: "0.9rem",
  },
  "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
    fontSize: "0.9rem",
  } ,
  "@media (max-width: 480px)": {
    fontSize: "0.7rem",//10px
  },
  "@media (max-width: 425px)": {
  }
}));

export const IconImage = styled("img")(({ theme }) => ({
  width: "30px",
  height: "30px",
  "@media (max-width: 1280px)": {
    width: "24px",
    height: "24px",
  },
  "@media (max-width: 480px)": {
    width: "14px",
    height: "14px",
  },

  "@media (max-width: 425px)": {
  },
  "@media (max-width: 360px)": {
    width: "14px",
    height: "14px",
  }
}));

export const BulkScoreContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",  
  // gap: "3px",
  position: "absolute",
  bottom: "38%",
  left: "50%",
  // borderBottomRightRadius:"50%",
  // borderBottomLeftRadius:"50%",
  // borderRadius: "50%",
  width:"100%",
  // backgroundColor:"#000",
  transform: "translateX(-50%)",
  flexWrap: "nowrap",
  "@media (max-width: 1280px)": {
    bottom: "40%",
  },
  "@media (max-width: 768px)": {
  },
  "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
    bottom: "60%",
  },
  "@media (max-width: 480px)": {
    bottom: "57%",
  },
  "@media (max-width: 425px)": {
    bottom: "58%"
  },
  "@media (max-width: 400px)": {
    bottom: "61%"
  },
  "@media (max-width: 375px)": {
    bottom: "55%"
  },
  "@media (max-width: 320px)": {
    bottom: "60%"

  },

  "& .score": {
    backgroundColor: "#F3F3F3 !important",
    color: "#FFF",
    textAlign: "center",
    lineHeight: "1.2",
    padding:"1.125rem 3.750rem" ,//18px 60px
    "@media (max-width: 1280px)": {
    },
    "@media (max-width: 768px)": {
      fontSize: "18px", 
    },
    "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
      padding: "0.9rem 2.5rem",
    },
    "@media (max-width: 480px)": {
      padding: "0.625rem 2rem",//10px 30px
    },
    "@media (max-width: 425px)": {
      padding: "0.5rem 1.875rem",//8px 30px
    },
    "@media (max-width: 375px)": {
      padding: "0.5rem 1.8rem",//8px 20px
    },
    "@media (max-width: 270px)": {
      padding: "0.5rem 0.938rem",//8px 20px
    },  

    "& .scoreValue": {
      fontSize: "1.5rem", //24px
      fontWeight: "600",
      color:"#000",
      fontFamily:"Montserrat",
      display: "block",
      "@media (max-width: 1280px)": {
        fontSize: "1rem",
      },
      "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
        fontSize:"1rem"
      },
      
      "@media (max-width: 425px)": {
        fontSize: "0.875rem",//14px
      },
      "@media (max-width: 375px)": {
        fontSize: "0.8rem",//10px
      },
      // "@media (max-width: 360px)": {
      //   fontSize: "0.625rem",//10px
      // },
    },

    "& .scoreText": {
      fontSize: "1.250rem",//20px
      fontWeight: "600",
      color:"#000",
      fontFamily:"Montserrat",
      "@media (max-width: 1280px)": {
        fontSize: "0.8rem",
      },
      "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
        fontSize:"0.9rem"
      },
      "@media (max-width: 480px)": {
        fontSize: "0.7rem",//12px
      },
      "@media (max-width: 425px)": {
        fontSize: "0.688rem",//11px
      },
      "@media (max-width: 360px)": {
        fontSize: "0.5rem",//8px
      },
    },
  },

  "& .epssScore": {
    borderRadius: "0 0px 0 50px",
    borderRight: "1.5px solid #000",

    "@media (max-width: 1280px)": {
      borderRadius: "0 0px 0 30px",

    },
    
    "@media (max-width: 270px)": {
      borderRadius: "0 0px 0 25px",


    }
  },

  "& .cprScore": {
    borderRadius: "0px 0px 50px 0px", 
    borderLeft: "1.5px solid #000",

    "@media (max-width: 1280px)": {
      borderRadius: "0 0px 30px 0px",
    },
    "@media (max-width: 270px)": {
      borderRadius: "0 0px 25px 0px",
    }
  }
}));



export const ReferencesContainer = styled("div")(({ theme }) => ({
  padding: 0

}))
export const ReferenceItem = styled('div')({
  marginBottom: '2px',
});

export const ReferenceLink = styled('a')({
  color: '#0073e6',
  textDecoration: 'none',
  fontSize: "1rem",//16px
  fontWeight: "500",
  fontFamily:"Montserrat",
  "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
    fontSize:"0.8rem"
  },
  "@media (max-width: 480px)": {
    fontSize:"0.688rem"//11px
  }
});

export const AccordionSummaryValues = styled("span")({
  color: "#000",
  fontSize: "1rem",//16px
  fontFamily: " Montserrat",
  fontWeight: "500",
  "@media (max-width: 509px), (max-device-width: 509px) and (orientation: portrait)": {
    fontSize:"0.8rem"
  },
  "@media (max-width: 480px)": {
    fontSize:"0.688rem"//11px
  }
})
export const NoUnderlineLink = styled("a")({
  textDecoration: "none", 
});


