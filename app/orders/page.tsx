import { OrderList } from "@/components/home/your-orders/order-list";
import { Button, Stack } from "@mui/material";
import Link from "next/link";

const Page = () => {
  return (
    <Stack>
      <OrderList />
      <Button LinkComponent={Link} href="/?no-SSO=true">
        Back
      </Button>
    </Stack>
  );
};

export default Page;
