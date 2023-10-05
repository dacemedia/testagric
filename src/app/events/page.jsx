import PageIntro from "@/components/PageIntro";

const BlogPage = () => {
  return (
    <>
      <PageIntro eyebrow="Events" title="The latest events">
        {/* <p>
          Stay up-to-date with the latest Events
        </p> */}
  <a
          href="https://drive.google.com/drive/folders/1F9qXDwIy82-XbKAPFp7DywWhzAmI0y-5?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px", // Adjust padding for button size
            border: "2px solid #000", // Add border (stroke)
            borderRadius: "5px", // Add rounded corners
            fontSize: "16px", // Adjust font size
            textDecoration: "none", // Remove underline
            color: "#000", // Text color
            backgroundColor: "#fff", // Background color
            fontWeight: "bold", // Bold text
          }}
        
        >
          Launch of the climate Smart Governance Dashboard Oct 3 2023
        </a>
<br/> <br/> 

        <a
          href="https://drive.google.com/drive/folders/1VhFnaF-Xz4NmnlNxr3MTC339eILPd9ww?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px", // Adjust padding for button size
            border: "2px solid #000", // Add border (stroke)
            borderRadius: "5px", // Add rounded corners
            fontSize: "16px", // Adjust font size
            textDecoration: "none", // Remove underline
            color: "#000", // Text color
            backgroundColor: "#fff", // Background color
            fontWeight: "bold", // Bold text
          }}
        
        >
          CimBeR Locally Led Community Solar Water System
        </a>

        <a
          href="https://drive.google.com/drive/folders/1UgZ8tCSJ__A9ETtDCy9jHLYHE0d4wBZN?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "10px 20px", // Adjust padding for button size
            border: "2px solid #000", // Add border (stroke)
            borderRadius: "5px", // Add rounded corners
            fontSize: "16px", // Adjust font size
            textDecoration: "none", // Remove underline
            color: "#000", // Text color
            backgroundColor: "#fff", // Background color
            fontWeight: "bold", // Bold text
          }}
        
        >
          Early Warning, Early Action, Early Finance AWARE Platform
        </a>
      </PageIntro>
    </>
  );
};

export default BlogPage;
