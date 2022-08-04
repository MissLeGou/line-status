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
          <th></th>
          <th></th>
        </tr>
        <tr>
          <td
            className={`esub-table-lineColor esub-table-lineColor--${lineColor}`}
          ></td>
          <td className="esub-table-linename">{lineName}</td>
          <td className="esub-table-linestatus">{lineStatus}</td>
        </tr>
      </tbody>
      <tfoot></tfoot>
    </table>
  );
};
