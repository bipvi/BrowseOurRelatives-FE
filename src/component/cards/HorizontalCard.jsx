import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function HorizontalCard({classe = 'max-w-full'}) {
    return (
      <Card className={`${classe} max-h-[21rem] flex-row bg-myP shadow-xs hover:shadow-sm`}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Animalia_diversity.jpg"
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" className="mb-4 uppercase text-txt">
            startups
          </Typography>
          <Typography variant="h4" className="mb-2 text-txt">
            Lyft launching cross-platform service this week
          </Typography>
          <Typography className="mb-8 font-normal text-txt">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business mo
            of the story
          </Typography>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex text-bg items-center gap-2">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  }