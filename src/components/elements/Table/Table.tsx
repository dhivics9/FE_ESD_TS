import { ReactNode, useEffect, useState } from "react";

interface Props {
  className?: string;
  headers: (string | ReactNode)[];
  loading?: boolean;
  rows: (string | ReactNode)[][];
  rowCount?: number;
  widths?: (string | number)[];
  onClick?: (idx: number) => void;
}

const Table: React.FC<Props> = ({
  className,
  headers,
  loading,
  rows,
  rowCount,
  widths,
  onClick,
}) => {
  const [page, setPage] = useState(0);

  const row = rowCount == null ? 10 : rowCount;

  const renderBody = () => {
    if (loading || !rows.length) {
      return (
        <tr>
          <td colSpan={headers.length}>
            {loading ? <span className="loader"></span> : <h1>No data</h1>}
          </td>
        </tr>
      );
    }

    const start = page * row;
    const slice = rows.slice(start, start + row);

    return slice.map((value, i) => {
      const tds = value.map((v, j) => <td key={j}>{v}</td>);
      return (
        <tr key={i} onClick={() => onClick && onClick(i + page * row)}>
          {tds}
        </tr>
      );
    });
  };

  useEffect(() => {
    setPage(0);
  }, [rows.length]);

  return (
    <>
      {loading ? (
        <h1>Loading Data</h1>
      ) : (
        <div className="bg-white shadow-default  rounded-sm  ">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] table-auto overflow-x-auto">
              <thead>
                <tr className="bg-gray-2 dark:bg-meta-4 text-left">
                  {headers.map((v, i) => (
                    <th
                      key={i}
                      style={{ width: widths != null ? widths[i] : undefined }}
                    >
                      {v}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{renderBody()}</tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
