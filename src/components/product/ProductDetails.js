import React from 'react';
import styled from '@emotion/styled';
import { Grid, Box, Divider, Stack, Chip, Typography } from '@mui/material';

import { Title } from 'components/ui/Title';
import { AttachmentsList } from 'components/ui/AttachmentsList';
import { BulletList } from 'components/ui/BulletList';

const Wrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFFFFF',
  padding: 20,
  height: '100%'
});

const TitleContainer = styled(Grid)({
  marginBottom: 10
});

const ChipLabelStyle = styled(Typography)({
  color: '#FFFFFF'
});

const ChipStyle = styled(Chip)({
  background: '#CFD4DB'
});

const BoxMargin = styled(Box)({
  marginTop: 20
});

export const ProductDetails = ({ article }) => (
  <Wrapper>
    <Box>
      <TitleContainer container>
        <Grid item>
          <Title>DETAILS</Title>
        </Grid>
      </TitleContainer>
    </Box>
    <Divider />
    <BoxMargin>
      <Typography variant="body1" color="#A9A9A9">
        Features
      </Typography>
      {Object.entries(article?.features).map((item, i) => (
        <BulletList key={item[1]} feature={item[0]} val={item[1]} />
      ))}
    </BoxMargin>
    <BoxMargin>
      <Typography variant="body1" color="#A9A9A9">
        Attachments
      </Typography>
      {article?.attachments.map(item => (
        <AttachmentsList
          key={item.file_label}
          fileName={item.file_label}
          url={item.file_link}
        />
      ))}
    </BoxMargin>
    <BoxMargin>
      <Typography variant="body1" color="#A9A9A9" sx={{ marginBottom: '6px' }}>
        Keywords
      </Typography>
      <Stack direction="row" spacing={1}>
        {article?.keywords.map(tag => (
          <ChipStyle
            key={tag}
            label={<ChipLabelStyle>{tag}</ChipLabelStyle>}
            size="small"
          />
        ))}
      </Stack>
    </BoxMargin>
  </Wrapper>
);
