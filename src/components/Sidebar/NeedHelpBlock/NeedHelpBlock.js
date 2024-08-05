// import { useState } from 'react';
// import needHelpImage from '../../../images/2.svg';
// import sprite from '../../../images/sprite.svg';
// import {
//   AccentText,
//   Image,
//   Wrapper,
//   Text,
//   ButtonWrapper,
//   ButtonText,
//   CircleIcon,
// } from './NeedHelpBlock.styled';
// import BasicModal from 'components/Modals/BasicModal';
// import NeedHelpModal from 'components/Modals/NeedHelpModal';

// const NeedHelpBlock = () => {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <Wrapper>
//       <Image src={needHelpImage} alt="need help image" />

//       <Text>
//         If you need help with <AccentText>TaskPro</AccentText>, check out our
//         support resources or reach out to our customer support team.
//       </Text>

//       <ButtonWrapper onClick={handleOpen}>
//         <CircleIcon>
//           <use href={sprite + '#icon-help-circle'} />
//         </CircleIcon>

//         <ButtonText>Need help?</ButtonText>
//       </ButtonWrapper>

//       <BasicModal
//         name="NeedHelp"
//         open={open}
//         closeModal={handleClose}
//         children={<NeedHelpModal closeModal={handleClose} />}
//       />
//     </Wrapper>
//   );
// };

// export default NeedHelpBlock;


import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import needHelpImage from '../../../images/2.svg';
import sprite from '../../../images/sprite.svg';
import {
  AccentText,
  Image,
  Wrapper,
  Text,
  ButtonWrapper,
  ButtonText,
  CircleIcon,
} from './NeedHelpBlock.styled';
import BasicModal from 'components/Modals/BasicModal';
import NeedHelpModal from 'components/Modals/NeedHelpModal';
import '../../../i18n'; // Asigură-te că i18n este importat

const NeedHelpBlock = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <Image src={needHelpImage} alt="need help image" />

      <Text>
        {t('needHelpTextPart1')} <AccentText>{t('taskPro')}</AccentText>{' '}
        {t('needHelpTextPart2')}
      </Text>

      <ButtonWrapper onClick={handleOpen}>
        <CircleIcon>
          <use href={sprite + '#icon-help-circle'} />
        </CircleIcon>

        <ButtonText>{t('needHelp')}</ButtonText>
      </ButtonWrapper>

      <BasicModal
        name="NeedHelp"
        open={open}
        closeModal={handleClose}
        children={<NeedHelpModal closeModal={handleClose} />}
      />
    </Wrapper>
  );
};

export default NeedHelpBlock;
