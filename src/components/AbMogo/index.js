import React from 'react';
import styled from 'styled-components';
import View from '../../styled/View';
import Text from '../../styled/Text';

import facebook from '../../assets/images/facebook.png';
import twetter from '../../assets/images/twetter.png';
import instagram from '../../assets/images/instagram.png';
import pinterest from '../../assets/images/pinterest.png';
import youtube from '../../assets/images/youtube.png';
import wiki from '../../assets/images/wiki.png';
import t from '../../assets/images/t.png';

const Input = styled.input`
    width: 230px;
    height: 34px;
`;

const Button = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    color: white;
    background-color: #43e2c5;
    font-size: 13px;
    font-weight: bold;
    opacity: 0.8;
    cursor: pointer;
`;

const Hr = styled.hr`
    width: 100%;
`;

function AbMogo(){
    return(
        <View w='464px'>
            <View fontSize='46px' fontW='800' op='0.2'>MoGo</View>
            <Text fontSize='13.7px' m='20px 0 42px' lh='2' op='0.6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text><Text fontW='bold' fontSize='20px'> 15k</Text> followers</Text>
            <Hr/>
            <View flex justC='space-between' alignI='center' w='310px' mT='15px' fontStyle='italic'>
                <Text>Follow Us:</Text>
                <img src={facebook} alt='fb' />
                <img src={twetter} alt='tw' />
                <img src={instagram} alt='in' />
                <img src={pinterest} alt='p' />
                <img src={youtube} alt='y' />
                <img src={wiki} alt='w' />
                <img src={t} alt='t' />
            </View>
            <View mT='41px'>
                <Input placeholder='Your Email...'/>
                <Button>SUBSCRIBE</Button>
            </View>
        </View>
    )
}

export default AbMogo;