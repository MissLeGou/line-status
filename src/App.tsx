import { Col, Container, Row } from "react-bootstrap";
import { EsubTable } from "./components/EsubTable";
import { useGetLineData } from "./hooks/useGetLineData";
import { getLineColor } from "./utils";
import "./App.scss";

function App() {
  const [linesData] = useGetLineData();

  return (
    <div className="App">
      <Container className="mt-5 mb-3 esub-page">
        <Row className="mb-3 esub-page-header">
          <h1>Line Status Board</h1>
        </Row>
        <Row className="esub-page-row">
          <Col sm={4} md={12} lg={12}>
            <Row className="esub-table-row">
              <Col>
                {Object.values(linesData).map(
                  (line: {
                    id: string;
                    name: string;
                    lineStatuses: [{ statusSeverityDescription: string }];
                  }) => (
                    <div key={line.id}>
                      <EsubTable
                        lineColor={getLineColor(line.id)}
                        lineName={line.name}
                        lineStatus={
                          line.lineStatuses[0].statusSeverityDescription
                        }
                      />
                    </div>
                  )
                )}
              </Col>
              <Col md={4} lg={4}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
