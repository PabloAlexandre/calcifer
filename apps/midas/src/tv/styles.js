import styled from 'styled-components';

const TimerContainer = styled.div`
  position: absolute;
  right: 70px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotificationContainer = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 50%;
  height: 100%;
  top: 40px;
  left: 40px;
  display: flex;
  flex-direction: column;
`;

const CityName = styled.p`
  color: white;
  font-size: 28px;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
  letter-spacing: 5px;
`;

export default {
  TimerContainer,
  CityName,
  NotificationContainer
}