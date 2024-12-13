import { Component } from "react";
import { MdDone } from "react-icons/md";
import { Avatar, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import AddComment from "./AddComment";

class CommentArea extends Component {
  render() {
    const { itemId, commenti } = this.props;
    return (
      <>
        <Card className="bg-transparent">
          <List>
            <ListItem>
                <AddComment itemId={itemId} />
            </ListItem>
            {commenti.map((c) => {
              return (
                <ListItem className="flex flex-col gap-2 mx-5">
                  <div className="flex items-center justify-start w-full gap-3">
                    <ListItemPrefix>
                      <Avatar
                        variant="circular"
                        alt="candice"
                        className="w-8 h-8"
                        src={c.user.avatar}
                      />
                    </ListItemPrefix>

                    <Typography variant="h6" className="text-txt">
                      {c.user.username}
                      {c.user.ruolo === "ADMIN" && <MdDone className="inline ml-2"/>}
                    </Typography>
                  </div>
                  <Typography className="self-start text-txt">
                    {c.contenuto}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
        </Card>
      </>
    );
  }
}

export default CommentArea;