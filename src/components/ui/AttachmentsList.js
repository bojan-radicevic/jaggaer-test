import React from 'react';
import styled from '@emotion/styled';
import { Link, Box, SvgIcon } from '@mui/material';

import Attachment from 'assets/icons/attachment.svg';

const AttachmentIcon = () => (
  <SvgIcon>
    <Attachment />
  </SvgIcon>
);

const BulletContainer = styled(Box)({
  display: 'flex',
  '& svg': {
    width: '15px',
    marginRight: '4px'
  }
});

export const AttachmentsList = ({ fileName, url }) => (
  <BulletContainer>
    <AttachmentIcon />
    <Link
      href={url}
      underline="none"
      sx={{
        color: '#327189'
      }}
    >
      {fileName}
    </Link>
  </BulletContainer>
);
