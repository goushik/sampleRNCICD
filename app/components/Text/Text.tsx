import styled from 'styled-components/native';
import {colors,textStyles} from 'constants';


export const Title = styled.Text`
  font-size: ${textStyles.fontSize.screenTitle};
  line-height: 29px;  
  color: ${colors.titleColor};
`;

export const Headline = styled.Text`
  font-size: ${textStyles.fontSize.normalTmp};
  line-height: 24px;
  color: ${colors.headlineText};
`;

export const HeadlineSmall = styled.Text`
  font-size: ${textStyles.fontSize.medium};
  line-height: 16px;
  color: ${colors.headlineText};
`;

export const Paragraph = styled.Text`
  font-size: ${textStyles.fontSize.normalTmp};
  line-height: 24px;
  color: ${colors.white};
`;

