import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
  course = {} as Course;
  // course: (Course | undefined);

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

  save(): void {
    this.courseService.save(this.course);
  }

  ngOnInit(): void {
    this.course = this.courseService.retrieveById(Number(this.activatedRoute.snapshot.paramMap.get('id')));
  }
}
