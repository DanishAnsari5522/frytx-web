// import { Container } from "@nextui-org/react";
import dynamic from "next/dynamic";

const TableWithNoSSR = dynamic(import('./TestTable'), {
    ssr: false,
});

const TableLayoutDan = () => {
    return (
        <>
            <TableWithNoSSR />
            {/* {children} */}
        </>
    );
};

export default TableLayoutDan;