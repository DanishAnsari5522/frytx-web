import { Table, Row, Col, Tooltip, User, Text } from "@nextui-org/react";

const data = [
    {
        id: 1,
        name: 'Danish',
        email: 'email',
        phone: 'phone'
    },
    {
        id: 2,
        name: 'Danish',
        email: 'email',
        phone: 'phone'
    },
]
export default function UserTable() {
    const columns = [

        { name: "NAME", uid: "name" },
        { name: "Email", uid: "email" },
        { name: "Phone", uid: "phone" },
        { name: "ACTIONS", uid: "id" },
    ];
    const renderCell = (user: UserType, columnKey: React.Key) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "name":
                return (
                    <p>{cellValue}</p>
                );
            case "email":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );
            case "phone":
                return <p>status</p>;

            case "id":
                return (
                    <>
                        <button onClick={() => { alert(cellValue) }}>V  </button>

                        <button onClick={() => { alert(cellValue) }}> E  </button>

                        <button onClick={() => { alert(cellValue) }}>D</button>
                    </>
                );
            default:
                return cellValue;
        }
    };
    return (
        <Table
            aria-label="Example table with custom cells"
            css={{
                height: "auto",
                minWidth: "100%",
            }}
            selectionMode="none"
        >
            <Table.Header columns={columns}>
                {(column) => (
                    <Table.Column
                        key={column.uid}
                    // hideHeader={column.uid === "actions"}
                    // align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </Table.Column>
                )}
            </Table.Header>
            <Table.Body items={data}>
                {(item: UserType) => (
                    <Table.Row>
                        {(columnKey) => (
                            <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                        )}
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
    );
}