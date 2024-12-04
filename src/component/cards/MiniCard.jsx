import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

export default function MiniCard() {
  return (
    <>
      <Card className="py-4 w-full bg-myP shadow-xs popup rounded-xl">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
            className="object-cover logo-shadow h-full w-full" 
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
        <Typography variant="h5" className="mb-2 z-40 text-txt relative bottom-10 home-text-shadow">
          UI/UX Review Check
        </Typography>
      </CardHeader>
    </Card>
    </>
  );
}
