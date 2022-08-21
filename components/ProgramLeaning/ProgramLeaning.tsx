import React, { ReactElement } from 'react';
import { IProduct } from '../../models/models';
import Course from '@UI/Course/Course';


type ProgramLeaningType = {
  courses: IProduct[] | undefined
}

export default function ProgramLeaning(props: ProgramLeaningType): ReactElement {
  const { courses } = props;



  return (
    <>
      {courses?.map((item, index) => <Course title={item.title} items={item.specializedSubjects.map(i => i.string)} key={index}/>)}
    </>
  );
}


