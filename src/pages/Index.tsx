import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-science-blue/10 via-science-purple/5 to-science-green/10">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-soft-pink/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-comfortaa font-bold text-gray-800">Клуб Науки</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8 font-open-sans">
              <a href="#program" className="text-gray-600 hover:text-primary transition-colors">Программа</a>
              <a href="#schedule" className="text-gray-600 hover:text-primary transition-colors">Расписание</a>
              <a href="#teachers" className="text-gray-600 hover:text-primary transition-colors">Педагоги</a>
              <a href="#reviews" className="text-gray-600 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 font-open-sans text-lg px-4 py-2">
                🔬 Онлайн лаборатория знаний для детей 9-14 лет
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-comfortaa font-bold text-gray-800 mb-6 leading-tight">
                Научные открытия 
                <br />
                <span className="text-primary">каждую субботу</span>
              </h1>
              <p className="text-xl text-gray-600 font-open-sans mb-8">
                10 образовательных модулей: от философии науки до искусства аргументации. 
                Исследуем мир через книги, эксперименты и увлекательные дискуссии!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-comfortaa text-lg px-8 py-4">
                  <Icon name="FlaskConical" className="mr-2 h-5 w-5" />
                  Начать исследование
                </Button>
                <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-comfortaa text-lg px-8 py-4">
                  <Icon name="BookOpen" className="mr-2 h-5 w-5" />
                  Изучить программу
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="relative">
                <img 
                  src="/img/785467ad-f684-42c3-88a2-0bda76d679da.jpg" 
                  alt="Образовательная лаборатория с научным оборудованием и книгами" 
                  className="w-full h-auto rounded-2xl shadow-2xl border-4 border-book-gold/20"
                />
                <div className="absolute -top-2 -left-2 text-3xl animate-bounce">📚</div>
                <div className="absolute -bottom-2 -right-2 text-2xl animate-bounce delay-300">🔬</div>
                <div className="absolute top-1/4 -right-4 text-2xl animate-pulse delay-500">🎓</div>
                <div className="absolute bottom-1/4 -left-4 text-xl animate-pulse delay-700">⚛️</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-science-blue/30 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-book-cream/20 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-science-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="h-8 w-8 text-science-blue" />
                </div>
                <h3 className="text-xl font-comfortaa font-bold mb-3">📅 Лаборатория каждую субботу</h3>
                <p className="text-gray-600 font-open-sans">4 исследовательские сессии в месяц в 12:12</p>
              </CardContent>
            </Card>

            <Card className="border-science-purple/30 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-science-purple/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-science-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="BookOpen" className="h-8 w-8 text-science-purple" />
                </div>
                <h3 className="text-xl font-comfortaa font-bold mb-3">📚 10 модулей знаний</h3>
                <p className="text-gray-600 font-open-sans">От научной философии до ораторского мастерства</p>
              </CardContent>
            </Card>

            <Card className="border-science-green/30 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-science-green/5 to-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-science-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="GraduationCap" className="h-8 w-8 text-science-green" />
                </div>
                <h3 className="text-xl font-comfortaa font-bold mb-3">🎓 999 ₽ в месяц</h3>
                <p className="text-gray-600 font-open-sans">Инвестиция в академическое будущее</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-4">
              🔬 Исследовательские модули программы
            </h2>
            <p className="text-xl text-gray-600 font-open-sans max-w-3xl mx-auto">
              Каждый модуль — это 3-5 минут активного познания через эксперименты мысли и научный диалог
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: "Brain", title: "🧠 Философия науки", color: "science-blue", emoji: "🧠" },
              { icon: "Atom", title: "⚛️ Научные открытия", color: "science-purple", emoji: "⚛️" },
              { icon: "Palette", title: "🎨 Искусство и культура", color: "science-orange", emoji: "🎨" },
              { icon: "ScrollText", title: "📜 Мудрые притчи", color: "book-brown", emoji: "📜" },
              { icon: "User", title: "👥 Великие биографии", color: "science-blue", emoji: "👥" },
              { icon: "Crown", title: "🎩 Этикет и манеры", color: "book-gold", emoji: "🎩" },
              { icon: "BookText", title: "📖 Словарный запас", color: "science-green", emoji: "📖" },
              { icon: "MessageSquare", title: "💬 Искусство дебатов", color: "science-purple", emoji: "💬" },
              { icon: "Presentation", title: "🎤 Ораторское мастерство", color: "science-orange", emoji: "🎤" },
              { icon: "Telescope", title: "🔭 Исследовательские методы", color: "science-blue", emoji: "🔭" }
            ].map((item, index) => (
              <Card key={index} className={`border-gray-200 hover:border-${item.color}/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 bg-gradient-to-br from-white to-gray-50/50`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-${item.color}/20`}>
                    <Icon name={item.icon as any} className={`h-6 w-6 text-${item.color}`} />
                  </div>
                  <h3 className="font-comfortaa font-semibold text-gray-800 text-sm leading-tight">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Pricing */}
      <section id="schedule" className="py-20 bg-gradient-to-r from-soft-lavender/20 to-soft-peach/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-12">
            Расписание и стоимость
          </h2>

          <Card className="border-primary/30 shadow-2xl">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="text-left">
                  <h3 className="text-2xl font-comfortaa font-bold mb-6 text-primary">Расписание занятий</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Icon name="Calendar" className="h-5 w-5 text-primary mr-3" />
                      <span className="font-open-sans">Каждую субботу</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Clock" className="h-5 w-5 text-primary mr-3" />
                      <span className="font-open-sans">В 12:12 (по Москве)</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Users" className="h-5 w-5 text-primary mr-3" />
                      <span className="font-open-sans">4 занятия в месяц</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Timer" className="h-5 w-5 text-primary mr-3" />
                      <span className="font-open-sans">Длительность: 60 минут</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <h3 className="text-2xl font-comfortaa font-bold mb-6 text-secondary">Стоимость</h3>
                  <div className="space-y-4">
                    <div className="text-5xl font-comfortaa font-bold text-gray-800">999 ₽</div>
                    <p className="text-gray-600 font-open-sans">за месяц обучения</p>
                    <div className="space-y-2 text-sm font-open-sans text-gray-600">
                      <div>✨ Пробное занятие бесплатно</div>
                      <div>✨ Никаких скрытых доплат</div>
                      <div>✨ Возможна оплата по занятиям</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-comfortaa text-xl px-12 py-4">
                  <Icon name="Gift" className="mr-2 h-6 w-6" />
                  Забронировать пробное занятие
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-4">
              Наши педагоги
            </h2>
            <p className="text-xl text-gray-600 font-open-sans">
              Опытные специалисты, которые любят детей и знают, как увлечь обучением
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Анна Смирнова", role: "Детский психолог", experience: "8 лет опыта" },
              { name: "Михаил Петров", role: "Философ и педагог", experience: "12 лет опыта" },
              { name: "Елена Козлова", role: "Искусствовед", experience: "6 лет опыта" }
            ].map((teacher, index) => (
              <Card key={index} className="border-soft-blue/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-comfortaa font-bold mb-2">{teacher.name}</h3>
                  <p className="text-gray-600 font-open-sans mb-1">{teacher.role}</p>
                  <p className="text-sm text-gray-500 font-open-sans">{teacher.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-4">
              Отзывы родителей
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Мария К.", text: "Дочь с удовольствием ждет каждую субботу! Стала более любознательной и уверенной в себе.", child: "мама Софьи, 11 лет" },
              { name: "Алексей Н.", text: "Сын научился лучше выражать свои мысли и стал интересоваться искусством. Спасибо педагогам!", child: "папа Артёма, 10 лет" },
              { name: "Екатерина Л.", text: "Отличный формат! Ребенок получает знания в игровой форме, никого не принуждают.", child: "мама Дарьи, 12 лет" }
            ].map((review, index) => (
              <Card key={index} className="border-soft-green/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 font-open-sans mb-4 italic">"{review.text}"</p>
                  <div className="text-right">
                    <p className="font-comfortaa font-semibold text-gray-800">{review.name}</p>
                    <p className="text-sm text-gray-500 font-open-sans">{review.child}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-comfortaa font-bold text-gray-800 mb-6">
            Готовы присоединиться к нашему клубу?
          </h2>
          <p className="text-xl text-gray-600 font-open-sans mb-8">
            Первое занятие абсолютно бесплатно — приходите знакомиться!
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-comfortaa text-xl px-12 py-4 mb-4">
            <Icon name="Phone" className="mr-2 h-6 w-6" />
            Записаться сейчас
          </Button>
          <p className="text-gray-500 font-open-sans">Или напишите нам в Telegram: @club_razvitie</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="bg-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-comfortaa font-bold">Клуб Науки</h3>
              </div>
              <p className="text-gray-300 font-open-sans">
                Онлайн клуб всестороннего развития для детей 9-14 лет
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-comfortaa font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 font-open-sans text-gray-300">
                <div className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@club-razvitie.ru
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
                  @club_razvitie
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-comfortaa font-semibold mb-4">Расписание</h4>
              <div className="space-y-2 font-open-sans text-gray-300">
                <div>Суббота: 12:12 (МСК)</div>
                <div>4 занятия в месяц</div>
                <div>Длительность: 60 минут</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 font-open-sans">
              © 2024 Клуб Развития. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;