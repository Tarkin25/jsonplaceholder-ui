import React from "react";
import User from "../models/User";
import {
    Grid,
    Card,
    CardHeader,
    CardContent,
    makeStyles,
    Link
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

type UserCardProps = {
    user: User;
};

const useStyle = makeStyles((theme) => ({
    cardHeader: {
        paddingBottom: theme.spacing(1)
    },
    cardContent: {
        paddingTop: 0
    }
}));

const UserCard = (props: UserCardProps) => {
    const {
        user: { name, username, email, phone, website },
    } = props;

    const classes = useStyle();

    return (
        <Card raised>
            <CardHeader title={name} subheader={username} className={classes.cardHeader} />
            <CardContent className={classes.cardContent} >
                <Grid container direction="row">
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <EmailIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"mailto:" + email}>
                                {email}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <PhoneIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"tel:" + phone}>
                                {phone}
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xl={12} container direction="row" spacing={1}>
                        <Grid item xl={1}>
                            <LanguageIcon fontSize="small" />
                        </Grid>
                        <Grid item xl={11}>
                            <Link href={"https://" + website}>
                                {website}
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default UserCard;
