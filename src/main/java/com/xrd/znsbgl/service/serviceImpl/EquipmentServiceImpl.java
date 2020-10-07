package com.xrd.znsbgl.service.serviceImpl;

import com.xrd.znsbgl.entity.Equipment;
import com.xrd.znsbgl.mapper.EquipmentMapper;
import com.xrd.znsbgl.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
@Service
public class EquipmentServiceImpl implements EquipmentService {

    @Autowired
    EquipmentMapper equipmentMapper;


    @Override
    public int addEquipment(Equipment equipment) {
        return  equipmentMapper.addEquipment(equipment);
    }

    @Override
    public ArrayList<Equipment> getAllEquipment() {
        return equipmentMapper.getAllEquipment();
    }

    @Override
    public Equipment getEquipmentById(Integer id) {
        return equipmentMapper.getEquipmentById(id);
    }

    @Override
    public int updategetEquipmentById(Equipment equipment) {
        return equipmentMapper.updategetEquipmentById(equipment);
    }

    @Override
    public int deleteEquipmentById(Integer id) {
        return equipmentMapper.deleteEquipmentById(id);
    }

}
