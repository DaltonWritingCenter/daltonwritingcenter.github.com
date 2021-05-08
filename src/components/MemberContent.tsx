import * as React from "react";

import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Grid,
    Typography,
    makeStyles,
    useTheme,
    CardActions,
} from "@material-ui/core";

//@ts-ignore
import PictureAlven from "../img/member/Alven.jpg";
//@ts-ignore
import PictureAriel from "../img/member/Ariel.jpg";
//@ts-ignore
import PictureArtorias from "../img/member/Artorias.jpg";
//@ts-ignore
import PictureClaire from "../img/member/Claire.jpg";
//@ts-ignore
import PictureDiane from "../img/member/Diane.jpg";
//@ts-ignore
import PictureEric from "../img/member/Eric.jpg";
//@ts-ignore
import PictureKristina from "../img/member/Kristina.jpg";
//@ts-ignore
import PictureLaura from "../img/member/Laura.jpg"
//@ts-ignore
import PictureLisa from "../img/member/Lisa.jpg"
//@ts-ignore
import PictureRachel from "../img/member/Rachel.jpg"
//@ts-ignore
import PictureRice from "../img/member/Rice.jpg"
//@ts-ignore
import PictureSinger from "../img/member/Singer.jpg"
//@ts-ignore
import PictureSophia from "../img/member/Sophia.jpg"
//@ts-ignore
import PictureSuperTom from "../img/member/Super Tom.jpg"
//@ts-ignore
import PictureWilliam from "../img/member/William.jpg"



const Members = [
    {
        name : "Super Tom",
        chineseFirstName : "Chuping",
        chineseLastName : "Tan",
        interests : ["Computer Science", "Art", "Theatre"],
        email : "tanchuping@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/tanchuping/consultation"
    },
    {
        name : "Alven",
        chineseFirstName : "Shuyang",
        chineseLastName : "Chang",
        interests : ["Psychology", "Sociology", "Political Science"],
        email : "changshuyang@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/consultation-wit-alven"
    },
    {
        name : "Artorias",
        chineseFirstName : "Yuqiao",
        chineseLastName : "Guan",
        interests : ["Social Science", "Political Philosophy", "History"],
        email : "guanyuqiao@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/guanyuqiao/regular-consultation"
    },
    {
        name : "Ariel",
        chineseFirstName : "Jingxuan",
        chineseLastName : "Tian",
        interests : ["Social Science", "Film Studies"],
        email : "tianjingxuan@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/tianjingxuan/consultation"
    },
    {
        name : "Claire",
        chineseFirstName : "Yixuan",
        chineseLastName : "Chen",
        interests : ["Astronomy", "Physics", "Python"],
        email : "chenyixuan@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/clairechenyixuan/claire-chen-yixuan-consultation"
    },
    {
        name : "Diane",
        chineseFirstName : "Yimei",
        chineseLastName : "Qiu",
        interests : ["Literature", "Philosophy", "Psychology"],
        email : "qiuyimei@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/yimeiqiu/regular-consultation"
    },
    {
        name : "Eric",
        chineseFirstName : "Siqiao",
        chineseLastName : "Liang",
        interests : ["Economy", "Sociology", "Public Policy"],
        email : "liangsiqiao@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/liangsiqiao/happy"
    },
    {
        name : "Kristina",
        chineseFirstName : "Yufei",
        chineseLastName : "Mao",
        interests : ["Humanities", "Social Science"],
        email : "maoyufei@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/maoyufei/dwc-consultation"
    },
    {
        name : "Laura",
        chineseFirstName : "Yumeng",
        chineseLastName: "Tan",
        interests : ["Biology"],
        email : "tanyumeng@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/tanyumeng/consultation"
    },
    {
        name : "Lisa",
        chineseFirstName : "Suqi",
        chineseLastName : "Chen",
        interests : ["Psychology", "Liberal Art"],
        email : "chensuqi@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/chensuqi/lisa-s-consultation"
    },
    {
        name : "Rachel",
        chineseFirstName : "Lu'ning",
        chineseLastName : "Zhang",
        interests : ["World Culture", "History"],
        email : "zhangluning@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/zhangluning/consulation"
    },
    {
        name : "Rice",
        chineseFirstName : "Xilin",
        chineseLastName : "Wang",
        interests : ["Mathematics", "Economy", "History"],
        email : "wangxilin@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/wangxilin/rice-consultation"
    },
    {
        name : "Singer",
        chineseFirstName : "Zi'an",
        chineseLastName : "Hao",
        interests : ["Biology", "Chemistry", "Theatre", "Music", "Geography"],
        email : "haozian@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/haozian/singer-consultation"
    },
    {
        name : "Sophia",
        chineseFirstName : "Jiarui",
        chineseLastName : "Yang",
        interests : ["Biology", "Chemistry", "Mathematics"],
        email : "yangjiarui@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/yangjiarui/consultation"
    },
    {
        name : "William",
        chineseFirstName : "Wenqing",
        chineseLastName : "Ge",
        interests : ["Politics", "Economy", "Poetry"],
        email : "gewenqing@i.pkuschool.edu.cn",
        consultationAddress : "https://calendly.com/gewenqing/dwc-consultation"
    }
]
const MemberPicture = {
    Alven : PictureAlven,
    Ariel : PictureAriel,
    Artorias : PictureArtorias,
    Claire : PictureClaire,
    Diane : PictureDiane,
    Eric : PictureEric,
    Kristina : PictureKristina,
    Laura : PictureLaura,
    Lisa : PictureLisa,
    Rachel : PictureRachel,
    Rice : PictureRice,
    Singer : PictureSinger,
    Sophia : PictureSophia,
    "Super Tom" : PictureSuperTom,
    William : PictureWilliam
}


const useMemberContentStyle = makeStyles((theme) => ({
    card : {
        padding : theme.spacing(1, 2, 1.5),
        // maxwidth: 100,
    },
    CardMedia : {
        margi: 'auto',
    },
    avatar : {
        height : theme.spacing(8),
        width : theme.spacing(8)
    },
    chip : {
        userSelect : "none",
        boxShadow : "none !important"
    },
    gridContainer : {
        width : "100%",
        margin : theme.spacing(0)
    },
    gridItem : {
        //width : "33%"
        flexGrow : 1
    }
}))


function MemberContent(){
    const classes = useMemberContentStyle();
    const theme = useTheme();

    return (<Box width = { 1 } padding = { theme.spacing(3) }>
        <Grid
         

            className = { classes.gridContainer }
            container
            justify = "center"
            spacing = { 4 }>{
            Members.map(({ name,
                interests,
                email,
                consultationAddress,
                chineseFirstName,
                chineseLastName
            }) => {
                return (<Grid
                        lg = {4}
                        xl = {4}
                        md = {6}
                        sm = {12}
                        // xs = {18}
                        item
                        className = { classes.gridItem }
                        key = { name }>
                    <Card
                        variant = "outlined"
                        className = { classes.card }>
                        <CardHeader
                            avatar = {
                                <Avatar
                                    className = { classes.avatar }
                                    src = { MemberPicture[name] } />
                            }
                            title = {
                                <Box paddingBottom = { theme.spacing(0.5) }>
                                    <Grid container spacing = { 1 } wrap = "nowrap">
                                        <Grid item>
                                            <Box
                                                fontWeight = "bold"
                                                component = "span"
                                                whiteSpace = "nowrap">
                                                { name }
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Box
                                                fontSize = "0.5em"
                                                component = "span"
                                                whiteSpace = "nowrap"
                                                color = { theme.palette.text.secondary }>
                                                { `/ ${ chineseLastName } ${ chineseFirstName }` }
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            }
                            subheader = {<Grid container spacing = { 1 }>{
                                    interests.map((interest, index) => {
                                        return (<Grid item key = { interest }>
                                            <Chip label= { interest }
                                                className = { classes.chip }
                                                clickable
                                                size = "small"
                                                variant = "outlined"
                                                color = {
                                                    index % 2 == 0 ? "primary" : "secondary"
                                                }
                                            />
                                        </Grid>)
                                    })
                                }</Grid>
                            }
                            titleTypographyProps = {{ variant : "h4" }}
                            />
                        <CardContent>
                            <Grid container spacing = { 2 }>
                                <Grid item>
                                    <Typography>
                                        Contact: {
                                            <Box component = "span" fontWeight = "bold">
                                                { email }
                                            </Box>
                                        }
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid container justify = "flex-end">
                                <Button
                                    color = "primary"
                                    disableElevation
                                    variant = "contained"
                                    href = { consultationAddress }>
                                    Consultation meeting
                                </Button>
                            </Grid>
                        </CardActions>
                    </Card>
                </Grid>)
            })
        }</Grid>
    </Box>)
}

export { MemberContent }