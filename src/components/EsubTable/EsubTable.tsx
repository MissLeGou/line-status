import { EsubTableProps } from "./EsubTable.types";
import "./EsubTable.scss";

export const EsubTable = ({
  lineColor,
  lineName,
  lineStatus,
}: EsubTableProps) => {
  return (
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <th>Underground line</th>
          <th>Line status</th>
        </tr>
        <tr>
          <td
            className={`esub-table-lineColor esub-table-lineColor--${lineColor}`}
          ></td>
          <td className="esub-table-linename" aria-label={`${lineName} line`}>
            {lineName}
          </td>
          <td className="esub-table-linestatus">{lineStatus}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
