package com.xrd.znsbgl.service;

import com.xrd.znsbgl.entity.Equipment;

import java.util.ArrayList;

public interface EquipmentService {

    public int addEquipment(Equipment equipment);

    public ArrayList<Equipment> getAllEquipment();

    public Equipment getEquipmentById(Integer id);

    public int updategetEquipmentById(Equipment equipment);

    public int deleteEquipmentById(Integer id);
}
