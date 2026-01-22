import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MessageCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Анна М.',
    phone: '+7 (***) ***-**-45',
    rating: 5,
    text: 'Огромная благодарность доктору! Давно боялась стоматологов, но здесь создали такую атмосферу, что я даже не заметила, как всё закончилось. Абсолютно безболезненно и очень душевно.',
    highlight: 'Больше не боюсь стоматологов',
    date: 'Декабрь 2024',
    treatment: 'Лечение кариеса',
  },
  {
    id: 2,
    name: 'Михаил К.',
    phone: '+7 (***) ***-**-78',
    rating: 5,
    text: 'Делал протезирование в клинике ЭСТЕТ. Всё объяснили, показали варианты, помогли выбрать оптимальный. Результат превзошёл ожидания — зубы как настоящие!',
    highlight: 'Результат превзошёл ожидания',
    date: 'Ноябрь 2024',
    treatment: 'Протезирование',
  },
  {
    id: 3,
    name: 'Елена В.',
    phone: '+7 (***) ***-**-12',
    rating: 5,
    text: 'Привела ребёнка на первый приём — были опасения, что будет бояться. Но доктор нашёл подход, всё объяснил малышу в игровой форме. Теперь сын сам просится к «доброму доктору».',
    highlight: 'Сын сам просится к врачу',
    date: 'Октябрь 2024',
    treatment: 'Детская стоматология',
  },
  {
    id: 4,
    name: 'Сергей П.',
    phone: '+7 (***) ***-**-89',
    rating: 5,
    text: 'Пришёл с острой болью, приняли без записи. Доктор быстро диагностировал проблему, провёл лечение. Через час я уже забыл про боль. Профессионализм высшего уровня!',
    highlight: 'Приняли без записи и помогли',
    date: 'Сентябрь 2024',
    treatment: 'Экстренная помощь',
  },
  {
    id: 5,
    name: 'Ольга Д.',
    phone: '+7 (***) ***-**-33',
    rating: 5,
    text: 'Делала профессиональную чистку и отбеливание. Результат потрясающий! Зубы стали белее на несколько тонов. Всё прошло комфортно, персонал очень приятный.',
    highlight: 'Потрясающий результат',
    date: 'Август 2024',
    treatment: 'Гигиена и отбеливание',
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
    <section className="py-24 md:py-36 bg-gradient-to-b from-card via-background to-card relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-6 py-3 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium mb-8 shadow-soft backdrop-blur-sm">
            Отзывы пациентов
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Истории наших{' '}
            <span className="text-gradient">пациентов</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Реальные отзывы людей, которые доверили нам свои улыбки — 
            и остались довольны результатом
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          {/* Large quote-style review card */}
          <div className="relative bg-background rounded-[2.5rem] p-10 sm:p-14 lg:p-20 shadow-hover border border-border/30">
            {/* Large quote icon */}
            <Quote className="absolute top-10 lg:top-14 left-10 lg:left-14 w-20 lg:w-28 h-20 lg:h-28 text-accent/40" />
            
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              {/* Highlight badge */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                <span className="inline-block px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-base">
                  «{reviews[currentIndex].highlight}»
                </span>
                <span className="inline-block px-4 py-2 bg-accent/50 text-accent-foreground font-medium rounded-full text-sm">
                  {reviews[currentIndex].treatment}
                </span>
              </div>

              {/* Stars */}
              <div className="flex gap-2 mb-10 justify-center">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 lg:w-8 lg:h-8 fill-gold-accent text-gold-accent" />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground text-center leading-relaxed mb-12 max-w-4xl mx-auto">
                {reviews[currentIndex].text}
              </blockquote>

              {/* Author info */}
              <div className="text-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-card rounded-full border border-border/50">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground text-lg">{reviews[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">{reviews[currentIndex].date}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 lg:-left-8 top-1/2 -translate-y-1/2 p-4 lg:p-5 rounded-full bg-background shadow-soft border border-border/50 hover:bg-accent hover:border-primary/20 transition-all duration-300 group"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 lg:-right-8 top-1/2 -translate-y-1/2 p-4 lg:p-5 rounded-full bg-background shadow-soft border border-border/50 hover:bg-accent hover:border-primary/20 transition-all duration-300 group"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-12'
                    : 'bg-border hover:bg-primary/30 w-3'
                }`}
                aria-label={`Перейти к отзыву ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center gap-12 lg:gap-20"
        >
          {[
            { value: '1000+', label: 'довольных пациентов' },
            { value: '5.0', label: 'средний рейтинг' },
            { value: '98%', label: 'рекомендуют нас' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
