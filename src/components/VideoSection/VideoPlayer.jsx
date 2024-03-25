import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePause, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './VideoPlayer.module.css'

const VideoPlayer = ({ src, width, height }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    return (
        <Container>
            <Row>
                <Col md={12} className='d-flex justify-content-center aligh-items-center'>
                    <video ref={videoRef} width={width} height={height}>
                        <source src={src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={12} className='d-flex justify-content-center aligh-items-center'>
                    <button className={`${styles.playPauseBtn}`} onClick={togglePlayPause}>
                        <FontAwesomeIcon icon={isPlaying ? faCirclePause : faCirclePlay} />
                    </button>
                </Col>
            </Row>
        </Container>
    );
};

export default VideoPlayer;
