import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Анна М.',
    phone: '+7 (***) ***-**-45',
    rating: 5,
    text: 'Огромная благодарность доктору! Давно боялась стоматологов, но здесь создали такую атмосферу, что я даже не заметила, как всё закончилось. Абсолютно безболезненно и очень душевно.',
    highlight: 'Больше не боюсь стоматологов',
    date: 'Декабрь 2024',
  },
  {
    id: 2,
    name: 'Михаил К.',
    phone: '+7 (***) ***-**-78',
    rating: 5,
    text: 'Делал протезирование в клинике ЭСТЕТ. Всё объяснили, показали варианты, помогли выбрать оптимальный. Результат превзошёл ожидания — зубы как настоящие!',
    highlight: 'Результат превзошёл ожидания',
    date: 'Ноябрь 2024',
  },
  {
    id: 3,
    name: 'Елена В.',
    phone: '+7 (***) ***-**-12',
    rating: 5,
    text: 'Привела ребёнка на первый приём — были опасения, что будет бояться. Но доктор нашёл подход, всё объяснил малышу в игровой форме. Теперь сын сам просится к «доброму доктору».',
    highlight: 'Сын сам просится к врачу',
    date: 'Октябрь 2024',
  },
  {
    id: 4,
    name: 'Сергей П.',
    phone: '+7 (***) ***-**-89',
    rating: 5,
    text: 'Пришёл с острой болью, приняли без записи. Доктор быстро диагностировал проблему, провёл лечение. Через час я уже забыл про боль. Профессионализм высшего уровня!',
    highlight: 'Приняли без записи и сразу помогли',
    date: 'Сентябрь 2024',
  },
  {
    id: 5,
    name: 'Ольга Д.',
    phone: '+7 (***) ***-**-33',
    rating: 5,
    text: 'Делала профессиональную чистку и отбеливание. Результат потрясающий! Зубы стали белее на несколько тонов. Всё прошло комфортно, персонал очень приятный.',
    highlight: 'Потрясающий результат',
    date: 'Август 2024',
  },
];

export const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-20 md:py-32 bg-card relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2.5 bg-accent/60 text-accent-foreground rounded-full text-sm font-medium mb-6 shadow-soft">
            Отзывы пациентов
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Истории наших <span className="text-gradient">пациентов</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Реальные отзывы людей, которые доверили нам свои улыбки — и остались довольны
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Large quote-style review card */}
          <div className="relative bg-background rounded-[2rem] lg:rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-hover border border-border/30">
            {/* Large quote icon */}
            <Quote className="absolute top-8 lg:top-12 left-8 lg:left-12 w-16 lg:w-24 h-16 lg:h-24 text-accent/50" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              {/* Highlight badge */}
              <div className="flex justify-center mb-8">
                <span className="inline-block px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-sm lg:text-base">
                  «{reviews[currentIndex].highlight}»
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-1.5 mb-8 justify-center">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 lg:w-7 lg:h-7 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-foreground text-center leading-relaxed mb-10 max-w-3xl mx-auto">
                {reviews[currentIndex].text}
              </blockquote>

              {/* Author info */}
              <div className="text-center">
                <div className="font-semibold text-foreground text-lg mb-1">{reviews[currentIndex].name}</div>
                <div className="text-sm text-muted-foreground">{reviews[currentIndex].date}</div>
              </div>
            </motion.div>

            {/* Navigation arrows - positioned outside on larger screens */}
            <button
              onClick={prevReview}
              className="absolute left-4 lg:-left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-background shadow-soft border border-border/50 hover:bg-accent hover:border-primary/20 transition-all duration-300 group"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 lg:-right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-background shadow-soft border border-border/50 hover:bg-accent hover:border-primary/20 transition-all duration-300 group"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-10'
                    : 'bg-border hover:bg-primary/30 w-3'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
