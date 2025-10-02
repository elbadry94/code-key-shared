import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'lib-student-life',
  imports: [NgForOf],
  templateUrl: './student-life.component.html',
  styleUrl: './student-life.component.css'
})
export class StudentLifeComponent {
studentLife = [
  {
    title: 'Student Activities',
    description: 'Organizing cultural, sports, and artistic events that help students develop their skills and enhance their talents.',
    icon: 'bi bi-people'
  },
  {
    title: 'Health Services',
    description: 'Providing medical care and health support for students throughout the year.',
    icon: 'bi bi-heart-pulse'
  },
  {
    title: 'Sports Activities',
    description: 'Sports clubs and well-equipped playgrounds to support physical fitness and encourage sportsmanship.',
    icon: 'bi bi-trophy'
  },
  {
    title: 'Cultural Activities',
    description: 'Cultural programs and events to promote identity and openness to other cultures.',
    icon: 'bi bi-book'
  },
  {
    title: 'Academic Support',
    description: 'Academic guidance services to assist students in their educational journey.',
    icon: 'bi bi-mortarboard'
  },
  {
    title: 'Student Community',
    description: 'Building an integrated student community that supports collaboration and communication among students.',
    icon: 'bi bi-chat-dots'
  }
];


  gallery = [
    '/assets/img/student1.jpg',
    '/assets/img/student2.jpg',
    '/assets/img/student3.jpg',
    '/assets/img/student4.jpg',
    '/assets/img/student1.jpg',
    '/assets/img/student2.jpg'
  ];
}
