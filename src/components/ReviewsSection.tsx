import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Анна М.',
    phone: '+7 (***) ***-**-45',
    rating: 5,
    text: 'Огромная благодарность доктору Джалилову! Давно боялась стоматологов, но здесь создали такую атмосферу, что я даже не заметила, как всё закончилось. Абсолютно безболезненно, профессионально и очень душевно. Теперь только сюда!',
    date: 'Декабрь 2024',
  },
  {
    id: 2,
    name: 'Михаил К.',
    phone: '+7 (***) ***-**-78',
    rating: 5,
    text: 'Делал протезирование в клинике ЭСТЕТ. Всё объяснили, показали варианты, помогли выбрать оптимальный. Результат превзошёл ожидания — зубы как настоящие! Очень доволен качеством и сервисом.',
    date: 'Ноябрь 2024',
  },
  {
    id: 3,
    name: 'Елена В.',
    phone: '+7 (***) ***-**-12',
    rating: 5,
    text: 'Привела ребёнка на первый приём — были опасения, что будет бояться. Но доктор нашёл подход, всё объяснил малышу в игровой форме. Теперь сын сам просится к «доброму доктору». Рекомендую!',
    date: 'Октябрь 2024',
  },
  {
    id: 4,
    name: 'Сергей П.',
    phone: '+7 (***) ***-**-89',
    rating: 5,
    text: 'Пришёл с острой болью, приняли без записи. Доктор быстро диагностировал проблему, провёл лечение. Через час я уже забыл про боль. Профессионализм на высшем уровне!',
    date: 'Сентябрь 2024',
  },
  {
    id: 5,
    name: 'Ольга Д.',
    phone: '+7 (***) ***-**-33',
    rating: 5,
    text: 'Делала профессиональную чистку и отбеливание. Результат потрясающий! Зубы стали белее на несколько тонов. Всё прошло комфортно, персонал очень приятный и внимательный.',
    date: 'Август 2024',
  },
];

export const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-4">
            Отзывы
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Что говорят наши пациенты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Реальные отзывы людей, которые доверили нам свои улыбки
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main review card */}
          <div className="relative bg-background rounded-3xl p-8 sm:p-12 shadow-card">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent opacity-50" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-lg sm:text-xl text-foreground text-center leading-relaxed mb-8">
                "{reviews[currentIndex].text}"
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <div className="font-semibold text-foreground">{reviews[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{reviews[currentIndex].phone}</div>
                <div className="text-sm text-muted-foreground mt-1">{reviews[currentIndex].date}</div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-primary w-6'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Перейти к отзыву ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-muted hover:bg-accent transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
