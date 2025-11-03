export const kidsTheme = {
  token: {
    colorPrimary: "#20B2AA", // Teal cho primary (buttons, links)
    colorPrimaryHover: "#FFB6C1", // Pink hover
    colorBgContainer: "#F8F9FA", // Neutral bg
    colorText: "#333", // Dark text
    borderRadiusLG: 8, // Rounded corners soft
    colorSuccess: "#20B2AA", // Teal for success
    colorWarning: "#FF69B4", // Pink for warnings
  },
  components: {
    Layout: {
      colorBgContainer: "#F8F9FA", // Bg for layout
      headerBg: "#20B2AA", // Header teal
      siderBg: "#20B2AA", // Sidebar teal
    },
    Menu: { 
      algorithm: true,  
      itemBg: "#20B2AA",
      subMenuItemBg: "#20B2AA",  
      itemSelectedBg: "#FFB6C1",  
      itemHoverBg: "#FFB6C1",  
      itemColor: "#fff",
      subMenuItemTitleColor: "#fff", 
      itemHoverColor: "#333", 
      itemSelectedColor: "#333",  
      itemTitleFontWeight: 500,

      subMenuItemColor: "#fff",
      subMenuItemHoverBg: "#FFB6C1",        // Hover bg: pink
      subMenuItemHoverColor: "#333",        // Hover text: dark
      subMenuItemSelectedBg: "#FFB6C1",     // Selected bg: pink
      subMenuItemSelectedColor: "#333",     // Selected text: dark
      subMenuItemActiveBg: "#20B2AA",

    },
    Button: {
      defaultBorderColor: "#B2DFDB", 
    },
  },
};
