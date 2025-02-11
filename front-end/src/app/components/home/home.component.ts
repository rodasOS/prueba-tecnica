import {
  Component,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Student } from '../../../interfaces';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [FormsModule, ReactiveFormsModule],
})
export class HomeComponent implements OnInit {
  students = [] as Student[];

  studentForm: FormGroup;
  selectedGrade: number | null = null;
  private http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      name: [''],
      birth_date: [''],
      father_name: [''],
      mother_name: [''],
      grade: [''],
      section: [''],
      admission_date: [''],
    });
  }

  ngOnInit() {
    this.getStudentsByGrade();
  }

  getStudentsByGrade(): void {
    if (this.selectedGrade !== null) {
      this.http
        .get<Student[]>(
          `https://localhost:7205/api/Alumno/filtro/${this.selectedGrade}/`,
          {
            headers: {
              'x-api-key': 'f7e6d1158a2883e692865af3e372951f2934cb08',
            },
          }
        )
        .subscribe({
          next: (data) => {
            this.students = data;
          },
          error: (error) => {
            console.error('Error al obtener estudiantes');
          },
        });
    }
  }

  getCsrfToken() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('csrftoken='))
      ?.split('=')[1];
  }

  addStudent(): void {
    if (this.studentForm.valid) {
      this.http
        .post<Student>(
          'https://localhost:7205/api/Alumno/',
          this.studentForm.value,
          {
            headers: {
              'x-api-key': 'f7e6d1158a2883e692865af3e372951f2934cb08',
            },
          }
        )
        .subscribe({
          next: () => {
            const newStudent = this.studentForm.value;
            console.log('Estudiante agregado:', newStudent);
            this.getStudentsByGrade();
            this.studentForm.reset();
          },
          error: (error) => {
            console.error('Error al agregar estudiante:', error);
          },
        });
    }
  }
}
