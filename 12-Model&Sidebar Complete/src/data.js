import React from 'react'
import {
 FaBehance,
 FaFacebook,
 FaLinkedin,
 FaTwitter,
 FaSketch,
 FaHome,
 FaUserFriends,
 FaFolderOpen,
 FaCalendarAlt,
 FaWpforms,
} from 'react-icons/fa';

export const links = [
 {
  id: 1,
  url: '/',
  text: 'Home',
  symbol: <FaHome/>
 },
 {
  id: 2,
  url: '/about',
  text: 'Team',
  symbol: <FaUserFriends/>
 },
 {
  id: 3,
  url: '/projects',
  text: 'Projects',
  symbol: <FaFolderOpen/>
 },
 {
  id: 4,
  url: '/contact',
  text: 'Calender',
  symbol: <FaCalendarAlt/>
 },
 {
  id: 5,
  url: '/profile',
  text: 'Documents',
  symbol: <FaWpforms/>
 }
]
export const social = [
 {
  id: 6,
  url: '/',
  icon: <FaFacebook/>
 },
 {
  id: 7,
  url: '/',
  icon: <FaTwitter/>
 },
 {
  id: 8,
  url: '/',
  icon: <FaLinkedin/>
 },
 {
  id: 10,
  url: '/',
  icon: <FaBehance/>
 },
 {
  id: 11,
  url: '/',
  icon: <FaSketch/>
 }
]