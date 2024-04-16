import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keyword }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keyword} />
        <title>{title}</title>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};
Layout.defaultProps = {
  title: "Metalogic Software Pvt. Ltd.",
  description:
    "Discover how Metalogic Software Private Limited, based in Lalitpur, empowers businesses with cutting-edge web and mobile app solutions. From innovative technologies to personalized development, partner with us for excellence in software tailored to your unique needs.",
  keyword:
    "Metalogic Software Pvt Ltd, Metalogic Software, Lalitpur, Saptakhel, Metalogic Aashis Thapa, innovative software solutions, web development, mobile app development, technology company, Kathmandu, Nepal.",
};
export default Layout;
