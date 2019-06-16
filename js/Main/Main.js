import React from 'react';
import {
    MainContainer,
    MainHeader,
    Healthy,
    HealthyText,
    HealthyHeader,
    HealthyPar,
    HealthyImageContainer,
    HealthyImg,
    Experience,
    ExperienceHeader,
    ExperienceImageContainer,
    ExperienceImg,
    ExperiencePar,
    ExperienceText,
    Fitness,
    FitnessElement,
    FitnessHeader,
    FitnessImgContainer,
    FitnessImg,
    FitnessText
} from './MainStyles';

//images 
import healthy from './../../images/healthy.jpeg';
import experience from './../../images/experience.jpeg';
import drink from './../../images/drink.jpeg';


const images = [
    healthy,
    experience,
    drink
];

const Main = () => {
    return (
        <MainContainer id="scrollToMain">
            <MainHeader>Why a smoothie?</MainHeader>
            <Healthy>
                <HealthyText>
                    <HealthyHeader>It's healthy and delicious!</HealthyHeader>
                    <HealthyPar>Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi 
                        amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. 
                        Celery potato scallion desert raisin horseradish spinach carrot soko. 
                        Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
                         Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carro
                         Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.</HealthyPar>
                </HealthyText>
                <HealthyImageContainer>
                    <HealthyImg src={images[0]} alt='healthy woman yoga'/>
                </HealthyImageContainer>
            </Healthy>

            <Experience>
                <ExperienceText>
                    <ExperienceHeader>Every Smoothie is an experience. Make it count!</ExperienceHeader>
                    <ExperiencePar>Pea horseradish azuki bean lettuce avocado asparagus okra.
                        Kohlrabi radish okra azuki bean corn fava bean mustard tigernut jícama green bean celtuce collard greens avocado quandong fennel gumbo black-eyed pea.
                        Grape silver beet watercress potato tigernut corn groundnut. 
                        Chickweed okra pea winter purslane coriander yarrow sweet pepper radish garlic brussels sprout groundnut summer purslane earthnut pea tomato spring onion azuki bean gourd.
                        Gumbo kakadu plum komatsuna black-eyed pea green bean zucchini gourd winter purslane silver beet rock melon radish asparagus spinach.</ExperiencePar>
                </ExperienceText>
                <ExperienceImageContainer>
                    <ExperienceImg src={images[1]} alt='smoothie experience' />
                </ExperienceImageContainer>
            </Experience>
            
            <Fitness>
                <FitnessElement>
                    <FitnessHeader>Lose weight!</FitnessHeader>
                    <FitnessImgContainer>
                        <FitnessImg src={images[2]}/>
                    </FitnessImgContainer>
                    <FitnessText>Celery quandong swiss chard chicory earthnut pea potato. 
                        Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. 
                        Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</FitnessText>
                </FitnessElement>
                <FitnessElement>
                    <FitnessHeader>Stay alert!</FitnessHeader>
                    <FitnessImgContainer>
                        <FitnessImg src={images[2]}/>
                    </FitnessImgContainer>
                    <FitnessText>Celery quandong swiss chard chicory earthnut pea potato. 
                        Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. 
                        Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</FitnessText>
                </FitnessElement>
                <FitnessElement>
                    <FitnessHeader>Build muscle!</FitnessHeader>
                    <FitnessImgContainer>
                        <FitnessImg src={images[2]}/>
                    </FitnessImgContainer>
                    <FitnessText>Celery quandong swiss chard chicory earthnut pea potato. 
                        Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. 
                        Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard.</FitnessText>
                </FitnessElement>
            </Fitness>
        </MainContainer>
    )
}

export default Main;