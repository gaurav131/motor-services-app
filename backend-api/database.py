from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine

Base = declarative_base()


class User(Base):
    __tablename__ = 'user'
    name = Column(String(100), nullable=False)
    email = Column(String(100), primary_key=True)
    password = Column(String(100), nullable=False)

    def __repr__(self):
        return f"name: {self.name}"


class Cart(Base):
    __tablename__ = "cart"
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String, ForeignKey("user.email"))
    user = relationship(User, lazy='subquery')

    def __repr__(self):
        return f"name: {self.name}"


engine = create_engine('sqlite:///data.db')
Base.metadata.create_all(engine)
