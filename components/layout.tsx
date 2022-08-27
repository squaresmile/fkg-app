import { Container } from "react-bootstrap";

const Layout = ({ children }: { children: React.ReactNode }) => (
    <Container fluid="xl">{children}</Container>
);

export default Layout;
