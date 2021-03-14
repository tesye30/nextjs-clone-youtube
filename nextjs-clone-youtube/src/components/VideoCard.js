import { Box, Typography, Avatar, makeStyles } from '@material-ui/core';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/router';
import Image from 'next/image';

dayjs.extend(relativeTime);

const useStyles = makeStyles(() => ({
  caption: {
    fontWeight: 500,
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  },
}));

function VideoCard({ item }) {
  const classe = useStyles();
  const router = useRouter();

  return (
    <Box>
      <Image
        onClick={() =>
          router.push({
            pathname: '/video/[id]',
            query: { id: item._id },
          })
        }
        layout="intrinsic"
        width={500}
        height={300}
        alt={item.title}
        src={item.thumb}
      />
      <Box display="flex" mt={1}>
        <Box mr={1}>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            LC
          </Avatar>
        </Box>
        <Box>
          <Typography
            className={classe.caption}
            gutterBottom
            variant="body1"
            color="textPrimary"
          >
            {item.title}
          </Typography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default VideoCard;
