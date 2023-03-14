import Image from "next/image";
import {
  Dropdown,
  ButtonToolbar,
  Popover,
  IconButton,
  Whisper,
  ButtonGroup,
  Button,
  Grid,
  Row,
  Col,
  Stack,
} from "rsuite";

const productMenuItems = [
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
  {
    title: "Residential Proxies",
    subtitle: "Ethical redential proxies for all of your needs",
    link: "https://rayobyte.com/products/residential-proxies/",
  },
];

const renderProductMenu = ({ onClose, left, top, className }, ref) => {
  const handleSelect = (eventKey) => {
    onClose();
    console.log(eventKey);
  };

  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Grid
          style={{
            borderRadius: "10px",
            width: "600px",
          }}
        >
          <Row className="show-grid">
            {productMenuItems.map((item, index) => (
              <Col
                xs={24}
                md={12}
                lg={12}
                key={index}
                style={{
                  padding: "20px 30px",
                }}
              >
                <Stack
                  horizontal
                  spacing={20}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "0.3rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <Image
                    src="https://rayobyte.com/wp-content/uploads/2022/12/Exclude.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                  />
                  <Stack
                    direction="column"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <h6>{item.title}</h6>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "grey",
                      }}
                    >
                      {item.subtitle}
                    </p>
                  </Stack>
                </Stack>
              </Col>
            ))}
          </Row>
          <Row className="show-grid" gutter={0}>
            <Col
              xs={24}
              md={24}
              lg={24}
              style={{
                padding: "20px 40px",
                backgroundColor: "#f5f5f5",
              }}
            >
              <Stack horizontal spacing={20} justifyContent="space-around">
                <Stack direction="column" alignItems="flex-start">
                  <h6>All Products</h6>
                  <p style={{ fontSize: "12px", color: "grey" }}>
                    Ethical redential proxies for all of your needs
                  </p>
                </Stack>
                <Button
                  appearance="subtle"
                  style={{ borderRadius: "10px", padding: "0.5rem 1rem" }}
                >
                  Learn more
                </Button>
              </Stack>
            </Col>
          </Row>
        </Grid>
      </Dropdown.Menu>
    </Popover>
  );
};

const Menu = () => (
  <Whisper placement="bottomStart" trigger="click" speaker={renderProductMenu}>
    <Button
      style={{
        backgroundColor: "transparent",
        color: "white",
      }}
    >
      Hover me
    </Button>
  </Whisper>
);

export default Menu;
