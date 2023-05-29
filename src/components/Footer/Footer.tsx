import {
  FooterTag,
  Content,
  MainBlock,
  CopyrightBlock,
  Copyright,
  CopyrightNav,
  CopyrighIcon,
  CopyrighDate,
} from './Footer.styles';
import Navigation from '../Navigation';

const Footer = () => {
  return (
    <FooterTag>
      <Content>
        <MainBlock>
          <Navigation element={'footer'} />
        </MainBlock>

        <CopyrightBlock>
          <Copyright>
            <CopyrightNav to='/' element={'footer'}>
              Astraia
            </CopyrightNav>
            <CopyrighIcon>&copy;</CopyrighIcon>
            <CopyrighDate>{new Date().getFullYear()}</CopyrighDate>
          </Copyright>
        </CopyrightBlock>
      </Content>
    </FooterTag>
  );
};

export default Footer;
