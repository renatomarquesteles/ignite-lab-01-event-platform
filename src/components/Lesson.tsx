import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'MMMM', 'do' • 'h':'mm' 'aaaa"
  ); // Wednesday • June, 22nd • 7:00 p.m.

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 ${
          isActiveLesson && 'bg-green-500'
        }`}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={`flex items-center gap-2 text-sm font-medium ${
                isActiveLesson ? 'text-white' : 'text-blue-500'
              }`}
            >
              <CheckCircle size={20} />
              Content released
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Soon
            </span>
          )}

          <span
            className={`text-xs rounded py-[0.125rem] px-2 text-white border font-bold ${
              isActiveLesson ? 'border-white' : 'border-green-300'
            }`}
          >
            {props.type === 'live' ? 'LIVE' : 'CLASS'}
          </span>
        </header>

        <strong
          className={`mt-5 block ${
            isActiveLesson ? 'text-white' : 'text-gray-200'
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
